import { PatientForm } from "@/components/forms/patient-form"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex max-h-screen h-screen">
      {/* OTP Verif */}

      <section className="remove-scrollbar my-auto container">
        <div className="sub-container max-w-[496px]">
          <Image
            className="mb-12 h-10 w-fit"
            src={"/assets/icons/logo-full.svg"}
            alt={"CarePulse logo"}
            width={1000}
            height={1000}
          />

          <PatientForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © {new Date().getFullYear()} CarePulse
            </p>
            <Link href="/?admin=true" className="text-green-500"></Link>
          </div>
        </div>
      </section>

      <Image
        className="side-img max-w-[50%]"
        src={"/assets/images/onboarding-img.png"}
        alt={"Doctor image"}
        width={1000}
        height={1000}
      />
    </div>
  )
}
