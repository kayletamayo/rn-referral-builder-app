import React, { useState, useMemo, useEffect } from "react";
import { DataTable, useTheme, Text, ActivityIndicator } from 'react-native-paper';

import { makeStyles } from './styles';
import { View } from 'react-native';

interface TableProps<T> {
  data: {
    pageNumber: number;
    pageSize: number;
    paginatedData: T[];
    totalCount: number;
    totalPages: number;
  };
  withActions?: boolean;
  renderColumns: (item: T) => void;
  renderActions?: (item: T) => void;
  renderTitle: () => void;
  onPageChange: (page: number, pageSize: number) => void;
  loading?: boolean;
};

const Table: React.FC<TableProps<any>> = ({ data, withActions = false, renderColumns, renderActions, renderTitle, onPageChange, loading }) => {
  const [page, setPage] = useState(1);
  const [numberOfItemsPerPageList] = useState([10, 15, 20]);
  const [itemsPerPage, onItemsPerPageChange] = useState(numberOfItemsPerPageList[0]);

  const theme = useTheme();
  const styles = makeStyles(theme);

  const { paginatedData, pageNumber, pageSize, totalCount, totalPages } = data;

  useEffect(() => {
    onPageChange(page, itemsPerPage)
  }, [itemsPerPage, page]);

  const TableColumns = useMemo(() => {

    if (loading && paginatedData.length <= 0) {
      return (
        <DataTable.Row>
          <View style={styles.emptyList}>
            <ActivityIndicator animating={loading} size={30} />
          </View>
        </DataTable.Row>
      );
    }

    if (paginatedData && paginatedData.length <= 0) {
      return (
        <DataTable.Row>
          <View style={styles.emptyList}>
            <Text>No available data.</Text>
          </View>
        </DataTable.Row>
      );
    }
    return paginatedData.map((item) => (
      <DataTable.Row key={item["_id"]}>
        <>{renderColumns(item)}</>
        {withActions && renderActions && (
          <DataTable.Cell style={styles.actions}>
            <>{renderActions(item)}</>
          </DataTable.Cell>
        )}
      </DataTable.Row>
    ));
  }, [paginatedData]);

  return (
    <DataTable>
      <DataTable.Header style={styles.dataHeader}>
        <>{renderTitle()}</>
        {withActions && (
          <DataTable.Title style={styles.actionTitle}>ACTIONS</DataTable.Title>
        )}
      </DataTable.Header>

      {TableColumns}

      <DataTable.Pagination
        page={page}
        numberOfPages={totalPages}
        onPageChange={(page) => setPage(page)}
        numberOfItemsPerPageList={numberOfItemsPerPageList}
        numberOfItemsPerPage={pageSize}
        onItemsPerPageChange={onItemsPerPageChange}
        showFastPaginationControls={false}
        selectPageDropdownLabel="Rows per page"
        style={styles.dataTable}
        label={`${pageNumber}-${pageSize} of ${totalCount}`}
      />
    </DataTable>
  );
}

export default Table;