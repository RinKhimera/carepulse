"use client"

import { CustomFormField } from "@/components/custom-form-field"
import { SubmitButton } from "@/components/submit-button"
import { Form } from "@/components/ui/form"
import { createUser } from "@/lib/actions/patient.actions"
import { UserFormValidation } from "@/lib/validations"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useTransition } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datePicker",
  SELECT = "select",
  SKELETON = "skeleton",
}

export const PatientForm = () => {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  })

  const onSubmit = async ({
    name,
    email,
    phone,
  }: z.infer<typeof UserFormValidation>) => {
    startTransition(async () => {
      try {
        const user = { name, email, phone }

        const newUser = await createUser(user)

        console.log({ newUser })

        if (newUser) router.push(`/patients/${newUser.$id}/register`)
      } catch (error) {
        console.error(error)
      }
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className="header">Hi there!</h1>
          <p className="text-dark-700">Schedule your first appointment.</p>
        </section>

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name={"name"}
          label={"Full name"}
          placeholder={"John Doe"}
          iconSrc={"/assets/icons/user.svg"}
          iconAlt={"user icon"}
        />

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name={"email"}
          label={"Email"}
          placeholder={"email@domain.xyz"}
          iconSrc={"/assets/icons/email.svg"}
          iconAlt={"email icon"}
        />

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.PHONE_INPUT}
          name={"phone"}
          label={"Phone number"}
          placeholder={"(555) 123-4567"}
        />

        <SubmitButton isPending={isPending}>Get Started</SubmitButton>
      </form>
    </Form>
  )
}
