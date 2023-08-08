import React, { useState, useMemo } from "react";
import { DataTable, useTheme, Text } from 'react-native-paper';

import { makeStyles } from './styles';
import { View } from 'react-native';

interface TableProps<T> {
  data: T[];
  withActions?: boolean;
  renderColumns: (item: T) => void;
  renderActions?: (item: T) => void;
  renderTitle: () => void;
};

const Table: React.FC<TableProps<any>> = ({ data, withActions = false, renderColumns, renderActions, renderTitle }) => {
  const [page, setPage] = useState(1);
  const [numberOfItemsPerPageList] = useState([5, 10, 15, 20]);
  const [itemsPerPage, onItemsPerPageChange] = useState(numberOfItemsPerPageList[0]);

  const theme = useTheme();
  const styles = makeStyles(theme);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, data.length);

  // usememo

  const TableColumns = useMemo(() => {
    if (data.length <= 0) {
      return (
        <DataTable.Row>
          <View style={styles.emptyList}>
            <Text>No available data.</Text>
          </View>
        </DataTable.Row>
      );
    }

    return data.map((item) => (
      <DataTable.Row key={item.id}>
        <>{renderColumns(item)}</>
        {withActions && renderActions && (
          <DataTable.Cell style={styles.actions}>
            <>{renderActions(item)}</>
          </DataTable.Cell>
        )}
      </DataTable.Row>
    ));
  }, [data]);

  return (
    <DataTable>
      <DataTable.Header style={styles.dataHeader}>
        <>{renderTitle()}</>
        {withActions && <DataTable.Title style={styles.actionTitle}>ACTIONS</DataTable.Title>}
      </DataTable.Header>

      {TableColumns}

      <DataTable.Pagination
        page={page}
        numberOfPages={Math.ceil(data.length / itemsPerPage)}
        onPageChange={(page) => setPage(page)}
        label={`${from + 1}-${to} of ${data.length}`}
        numberOfItemsPerPageList={numberOfItemsPerPageList}
        numberOfItemsPerPage={itemsPerPage}
        onItemsPerPageChange={onItemsPerPageChange}
        showFastPaginationControls={false}
        selectPageDropdownLabel="Rows per page"
        style={styles.dataTable}
      />
    </DataTable>
  );
}

export default Table;