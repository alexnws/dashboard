import { useCallback, useContext } from "react"
import { Form, Formik } from "formik"
import * as Yup from "yup"
import AppContext from "/src/components/AppContext"
import EnterField from "/src/components/EnterField"

const displayingErrorMessagesSchema = Yup.object().shape({
  amount: Yup.number()
    .typeError("The amount must be a number")
    .test(
      "Amount equal to 0 ?",
      "The amount must not be equal to 0",
      (amount) => amount != 0
    )
    .required("Field is required"),
  description: Yup.string().required("Field is required"),
})

const AddDashboard = () => {
  const { addData } = useContext(AppContext)

  const handleFormSubmit = useCallback(
    (values, { resetForm }) => {
      addData({
        amount: Number(values.amount),
        description: values.description,
      })
      resetForm()

      return true
    },
    [addData]
  )

  return (
    <Formik
      initialValues={{
        amount: "0",
        description: "",
      }}
      validationSchema={displayingErrorMessagesSchema}
      onSubmit={handleFormSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <EnterField
            id="amount"
            name="amount"
            placeholder="Entrer un nombre"
            errorType={errors.amount}
            touchedType={touched.amount}
          />
          <EnterField
            type="textarea"
            id="description"
            name="description"
            placeholder="Entrer la description"
            inputStyle="h-32"
            errorType={errors.description}
            touchedType={touched.description}
          />
          <button
            className="w-6/12 p-1 text-white border-solid border-2 bg-black "
            type="submit"
          >
            ADD
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default AddDashboard
