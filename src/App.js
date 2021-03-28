import React from "react";
import { Formik, Field } from "formik";
import { TextField, Button } from "@material-ui/core"


function App() {
  return ( 
    <div>
      <Formik initialValues={{ address: "", city:'' }}
        onSubmit={( data, {setSubmitting, resetForm}) => {
          setSubmitting(true);
          //make async call
          console.log("submit: ", data);
          setSubmitting(false)
          resetForm(true);
        }}
      >
      {({ values, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
          <Field
          name="address"
          placeholder="ex: 123 Xyz St"
          type="input"
          as={TextField}
          />
          
          <Field
          name="city"
          placeholder="Choose City"
          as="select">
          <option value="charleston">Charleston</option>
          <option value="west_ashley">West Ashley</option>
          <option value="james_island">James Island</option>
          <option value="johns_island">John's Island</option>
          <option value="north_charleston">North Charleston</option>
          <option value="summerville">Summerville</option>
          <option value="goose_creek">Goose Creek</option>
          <option value="moncks_corner">Moncks Corner</option>
          <option value="hanahan">Hanahan</option>
          <option value="mt_pleasant">Mt Pleasant</option>

          </Field>

        
            <Button disabled={isSubmitting} type="submit">submit</Button>
              <pre>{JSON.stringify(values, null, 2)}</pre>
            </form>

        )}
      </Formik>
    </div>
  );
};


export default App;
