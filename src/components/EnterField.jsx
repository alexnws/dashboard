import { Field } from "formik"

const EnterField = (props) => {
  return (
    <div className="mb-8">
      <Field
        as={props.type}
        id={props.id}
        className={`${props.inputStyle} w-6/12 mb-1 p-2 border-solid border-2 border border-black rounded`}
        name={props.name}
        placeholder={props.placeholder}
      ></Field>
      {props.touchedType && props.errorType && (
        <div className="w-6/12 p-2 bg-red-300 text-red-800">
          {props.errorType}
        </div>
      )}
    </div>
  )
}

export default EnterField
