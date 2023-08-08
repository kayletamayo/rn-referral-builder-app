import React from "react";
import { View, Platform, KeyboardAvoidingView, SectionList } from "react-native";

import { useTheme, Text } from 'react-native-paper';
import { makeStyles } from './styles';

import { Input, Button } from '@components/controls';
import { useForm, Controller } from 'react-hook-form';

import { ReferralCreateDefault } from '@defaults/referral';
import { ReferralCreate } from 'types/referral';

interface Props {}

const FormInputs = [
  {
    title: "Personal Details",
    data: [
      {
        label: "First Name",
        name: "firstName",
        inputType: "input",
        validation: {},
      },
      {
        label: "Last Name",
        inputType: "input",
        name: "lastName",
        validation: {},
      },
      {
        label: "Email",
        inputType: "input",
        name: "email",
        validation: {},
      },
      {
        label: "Mobile",
        inputType: "input",
        name: "mobile",
        validation: {},
      },
    ],
  },
  {
    title: "Address",
    data: [
      {
        label: "Address line 1",
        inputType: "input",
        name: "address1",
        validation: {},
      },
      {
        label: "Address line 2",
        inputType: "input",
        name: "address2",
        validation: {},
      },
      {
        label: "Suburb",
        inputType: "input",
        name: "suburb",
        validation: {},
      },
      {
        label: "State",
        inputType: "input",
        name: "state",
        validation: {},
      },
      {
        label: "Postcode",
        inputType: "input",
        name: "postcode",
        validation: {},
      },
      {
        label: "Country",
        inputType: "countryPicker",
        name: "country",
        validation: {},
      },
    ],
  },
];

const ReferralBuilder: React.FC<Props> = (props) => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  const { control, handleSubmit } = useForm({
    defaultValues: ReferralCreateDefault
  });

  const renderFormFields = ({ item }: any) => {
    const { inputType, validation, name, label } = item;
    switch (inputType) {
      case "countryPicker":
        return null;
      case "input":
      default:
        return (
          <Controller
            control={control}
            rules={validation}
            name={name}
            render={({ field: { onChange, onBlur, value } }) => {
              return <Input mode="outlined" title={label} onChangeText={(value) => onChange(value)} onBlur={onBlur} value={value} />;
            }}
          />
        );
    }
  }

  const renderSectionHeader = ({ section }: any) => {
    return (
      <View style={styles.sectionTitleContainer}>
        <Text style={styles.sectionTitle}>{section.title}</Text>
      </View>
    )
  }

  const onSubmit = (data: ReferralCreate) => console.log(data);

  return (
    <KeyboardAvoidingView
      style={styles.keyboardView}
      behavior="padding"
      keyboardVerticalOffset={100}
      enabled={Platform.OS === "ios"}
    >
      <SectionList
        sections={FormInputs}
        keyExtractor={(item) => item.label}
        renderItem={renderFormFields}
        style={styles.container}
        stickySectionHeadersEnabled={false}
        ListHeaderComponent={
          <Text variant="headlineMedium" style={styles.headerTitle}>
            Referral Builder
          </Text>
        }
        renderSectionHeader={renderSectionHeader}
        ListFooterComponent={
          <Button
            label="Create Referral"
            mode="contained"
            onPress={handleSubmit(onSubmit)}
            style={styles.submitBtn}
          />
        }
      />
    </KeyboardAvoidingView>
  );
};

export default ReferralBuilder;