import { useCallback, useContext } from "react"
import { Form, Formik } from "formik"
import * as Yup from "yup"
import AppContext from "/src/components/AppContext"
import EnterField from "/src/components/EnterField"

const displayingErrorMessagesSchema = Yup.object().shape({
  amount: Yup.number()
    .typeError("Le montant doit être un nombre")
    .test(
      "Amount equal to 0 ?",
      "Le montant ne doit pas être égal à 0",
      (amount) => amount != 0
    )
    .required("Le champ est requis"),
  description: Yup.string().required("Le champ est requis"),
})

const AddDashboard = (props) => {
  const { addDatas } = useContext(AppContext)

  const handleFormSubmit = useCallback(
    (values, { resetForm }) => {
      addDatas({
        amount: Number(values.amount),
        description: values.description,
      })
      resetForm()

      return true
    },
    [addDatas]
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
            placeholder="La valeur"
            errorType={errors.amount}
            touchedType={touched.amount}
          />
          <EnterField
            type="textarea"
            id="description"
            name="description"
            placeholder="Une description"
            imputStyle="h-32"
            errorType={errors.description}
            touchedType={touched.description}
          />
          <button
            className="w-full p-2 text-white bg-gray-700 hover:bg-gray-400"
            type="submit"
          >
            Ajouter
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default AddDashboard
