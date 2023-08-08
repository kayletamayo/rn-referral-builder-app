import React from "react";
import { View, Platform, KeyboardAvoidingView, SectionList } from "react-native";

import { useTheme, Text } from 'react-native-paper';
import { makeStyles } from './styles';

import { Input, Button, CountryPickerInput } from '@components/controls';
import { useForm, Controller } from 'react-hook-form';

import { ReferralCreateDefault } from '@defaults/referral';
import { ReferralCreate } from 'types/referral';
import { useReferral } from '@hooks/useReferral';
import Toast from 'react-native-toast-message';

interface Props {}

const FormInputs = [
  {
    title: "Personal Details",
    data: [
      {
        label: "First Name",
        name: "firstName",
        inputType: "input",
        mode: "text",
        validation: {
          required: "First name field is required",
        },
      },
      {
        label: "Last Name",
        inputType: "input",
        name: "lastName",
        mode: "text",
        validation: {
          required: "Last name field is required",
        },
      },
      {
        label: "Email",
        inputType: "input",
        name: "email",
        mode: "email",
        validation: {
          required: "Email field is required",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Email format is invalid",
          },
        },
      },
      {
        label: "Mobile",
        inputType: "input",
        name: "mobileNumber",
        mode: "numeric",
        validation: {
          required: "Mobile number field is required",
        },
      },
    ],
  },
  {
    title: "Address",
    data: [
      {
        label: "Address line 1",
        inputType: "input",
        name: "addressLine1",
        mode: "text",
        validation: {
          required: "Address line 1 field is required",
        },
      },
      {
        label: "Address line 2",
        inputType: "input",
        name: "addressLine2",
        mode: "text",
        validation: {},
      },
      {
        label: "Suburb",
        inputType: "input",
        name: "suburb",
        mode: "text",
        validation: {},
      },
      {
        label: "State",
        inputType: "input",
        name: "state",
        mode: "text",
        validation: {},
      },
      {
        label: "Postcode",
        inputType: "input",
        name: "postCode",
        mode: "text",
        validation: {},
      },
      {
        label: "Country",
        inputType: "countryPicker",
        name: "country",
        mode: "text",
        validation: {
          required: "Country field is required",
        },
      },
    ],
  },
];

const ReferralBuilder: React.FC<Props> = (props) => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  const { control, handleSubmit, reset } = useForm({
    defaultValues: ReferralCreateDefault
  });
  const { createReferral, loading } = useReferral();

  const renderFormFields = ({ item }: any) => {
    const { inputType, validation, name, label, mode } = item;
    switch (inputType) {
      case "countryPicker":
        return (
          <Controller
            control={control}
            rules={validation}
            name={name}
            render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => {
              return (
                <CountryPickerInput
                  value={value}
                  onCountrySelect={onChange}
                  title={label}
                  errorMessage={error?.message}
                />
              );
            }}
          />
        );
      case "input":
      default:
        return (
          <Controller
            control={control}
            rules={validation}
            name={name}
            render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => {
              return (
                <Input
                  mode="outlined"
                  title={label}
                  onChangeText={(value) => onChange(value)}
                  onBlur={onBlur}
                  value={value}
                  errorMessage={error?.message}
                  inputMode={mode}
                />
              );
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

  const onSubmit = async(data: ReferralCreate) => {
    await createReferral(data);
    Toast.show({
       type: "success",
       text1: "Success",
       text2: "Referral record saved successfully!",
       position: 'bottom',
     });
    reset();
  };

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
            loading={loading}
          />
        }
      />
    </KeyboardAvoidingView>
  );
};

export default ReferralBuilder;