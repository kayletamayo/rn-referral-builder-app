import React, { useEffect } from "react";
import { View, ScrollView } from "react-native";
import { useTheme, Text, DataTable } from "react-native-paper";
import Table from "@components/Table";
import { Button } from "@components/controls";
import { makeStyles } from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import { SearchInput } from "@components/controls";

import { useReferral } from '@hooks/useReferral';
import { useReferralState } from '@context/referralContext';

interface Props {}

const ReferralList: React.FC<Props> = () => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  const { getReferrals, loading } = useReferral();
  const { referrals } = useReferralState();

  const getListData = (page: number, pageSize: number, search?: string) => {
    getReferrals(page, pageSize, search);
  }

  useEffect(() => {
    getListData(1, 10);
  }, []);

  const renderColumns = (item: any) => {
    return (
      <>
        <DataTable.Cell style={styles.nameCell}>
          <View style={{ paddingVertical: 10 }}>
            <Text variant="labelLarge">{`${item.firstName} ${item.lastName}`}</Text>
            <Text variant="labelMedium" style={styles.emailColumn}>{item.email}</Text>
          </View>
        </DataTable.Cell>
        <DataTable.Cell style={styles.phoneCell}>
          <>
            <Text variant="labelLarge">{item.mobileNumber}</Text>
          </>
        </DataTable.Cell>
      </>
    );
  };

  const renderActions = () => {
    return (
      <Icon name="more-vert" />
    )
  }

  const renderTitle = () => {
    return (
      <>
        <DataTable.Title style={styles.nameCell}>NAME</DataTable.Title>
        <DataTable.Title style={styles.phoneCell}>PHONE</DataTable.Title>
      </>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrap}>
        <Text variant="headlineMedium">View Records</Text>
        <View style={styles.filterRow}>
          <Button
            label="Filter"
            icon="filter"
            mode="outlined"
            labelStyle={styles.filterBtnLabel}
            style={styles.filterBtn}
          />
          <SearchInput
            onSearch={(search) => getListData(1, 10, search)}
          />
        </View>
      </View>
      <Table
        data={referrals}
        renderTitle={renderTitle}
        renderColumns={renderColumns}
        renderActions={renderActions}
        onPageChange={(page, pageSize) => {getListData(page, pageSize)}}
        loading={loading}
        withActions
      />
    </ScrollView>
  );
};

export default ReferralList;
