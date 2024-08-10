"use client"

import { FormFieldType } from "@/components/forms/patient-form"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { E164Number } from "libphonenumber-js"
import Image from "next/image"
import { Control } from "react-hook-form"
import PhoneInput from "react-phone-number-input"
import "react-phone-number-input/style.css"

type CustomFormFieldProps = {
  control: Control<any>
  fieldType: FormFieldType
  name: string
  label?: string
  placeholder?: string
  iconSrc?: string
  iconAlt?: string
  disabled?: boolean
  dateFormat?: string
  showTimeSelect?: boolean
  children?: React.ReactNode
  renderSkeleton?: (field: any) => React.ReactNode
}

const RenderField = ({
  field,
  props,
}: {
  field: any
  props: CustomFormFieldProps
}) => {
  const { fieldType, placeholder, iconSrc, iconAlt } = props

  switch (props.fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className="rounded md flex border-dark-500 bg-dark-400">
          {iconSrc && (
            <Image
              className="ml-2"
              src={iconSrc}
              alt={iconAlt || "icon"}
              height={24}
              width={24}
            />
          )}

          <FormControl>
            <Input
              className="shad-input border-0"
              placeholder={placeholder}
              {...field}
            />
          </FormControl>
        </div>
      )

    case FormFieldType.PHONE_INPUT:
      return (
        <FormControl>
          <PhoneInput
            className="input-phone"
            defaultCountry="CA"
            placeholder={placeholder}
            international
            withCountryCallingCode
            value={field.value as E164Number | undefined}
            onChange={field.onChange}
          />
        </FormControl>
      )
  }
}

export const CustomFormField = (props: CustomFormFieldProps) => {
  const { control, fieldType, name, label } = props

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel htmlFor={name}>{label}</FormLabel>
          )}

          <RenderField field={field} props={props} />

          <FormMessage className="shad-error" />
        </FormItem>
      )}
    />
  )
}
