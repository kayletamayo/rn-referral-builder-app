import React from "react";
import { View, ScrollView } from "react-native";
import { useTheme, Text, Searchbar, DataTable } from "react-native-paper";
import Table from "@components/Table";
import { Button } from "@components/controls";
import { makeStyles } from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons";

interface Props {}

const ReferralList: React.FC<Props> = () => {
  const theme = useTheme();
  const styles = makeStyles(theme);

  const mockData = {
    pageNumber: 1,
    pageSize: 10,
    paginatedData: [
      {
        firstName: "Justin",
        lastName: "Septimus",
        phone: "0436-283-2938",
        email: "example@email.com",
        id: "1",
      },
      {
        firstName: "Anika Rhiel",
        lastName: "Madsen",
        phone: "0436-283-2938",
        email: "example@email.com",
        id: "2",
      },
      {
        firstName: "Miracle",
        lastName: "Vaccaro",
        phone: "0436-283-2938",
        email: "example@email.com",
        id: "3",
      },
      {
        firstName: "Erin",
        lastName: "Levin",
        phone: "0436-283-2938",
        email: "example@email.com",
        id: "4",
      },
      {
        firstName: "Mira",
        lastName: "Herwitz",
        phone: "0436-283-2938",
        email: "example@email.com",
        id: "5",
      },
      {
        firstName: "Justin",
        lastName: "Septimus",
        phone: "0436-283-2938",
        email: "example@email.com",
        id: "6",
      },
      {
        firstName: "Anika Rhiel",
        lastName: "Madsen",
        phone: "0436-283-2938",
        email: "example@email.com",
        id: "7",
      },
      {
        firstName: "Miracle",
        lastName: "Vaccaro",
        phone: "0436-283-2938",
        email: "example@email.com",
        id: "8",
      },
      {
        firstName: "Erin",
        lastName: "Levin",
        phone: "0436-283-2938",
        email: "example@email.com",
        id: "9",
      },
      {
        firstName: "Mira",
        lastName: "Herwitz",
        phone: "0436-283-2938",
        email: "example@email.com",
        id: "10",
      },
      {
        firstName: "Justin",
        lastName: "Septimus",
        phone: "0436-283-2938",
        email: "example@email.com",
        id: "11",
      },
      {
        firstName: "Anika Rhiel",
        lastName: "Madsen",
        phone: "0436-283-2938",
        email: "example@email.com",
        id: "12",
      },
      {
        firstName: "Miracle",
        lastName: "Vaccaro",
        phone: "0436-283-2938",
        email: "example@email.com",
        id: "13",
      },
      {
        firstName: "Erin",
        lastName: "Levin",
        phone: "0436-283-2938",
        email: "example@email.com",
        id: "14",
      },
      {
        firstName: "Mira",
        lastName: "Herwitz",
        phone: "0436-283-2938",
        email: "example@email.com",
        id: "15",
      },
    ],
    totalPages: 2,
    totalCount: 4,
  };

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
            <Text variant="labelLarge">{item.phone}</Text>
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
          <Searchbar
            placeholder="Search"
            onChangeText={() => {}}
            value=""
            mode="bar"
            style={styles.searchInput}
            showDivider={false}
            theme={{
              colors: {
                elevation: {
                  level3: theme.colors.surface,
                },
              },
              roundness: 1,
            }}
          />
        </View>
      </View>
      <Table
        data={mockData.paginatedData}
        renderTitle={renderTitle}
        renderColumns={renderColumns}
        renderActions={renderActions}
        withActions
      />
    </ScrollView>
  );
};

export default ReferralList;
