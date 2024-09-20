import React, { useState } from "react";

function ContactUs () {
    const [submitted, setSubmitted] = useState(false);
    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')
    const [input3, setInput3] = useState('')
    const [error, setError] = useState({
      firstNameError : false,
      firstNameErrorText : '',
      lastNameError : false,
      lastNAmeErrorText : '',
      sayAnythingError : false,
      sayAnythingErrorText : ''
    });

    const submit = (e) => {
        e.preventDefault();

        let errors = {
            firstNameError : false,
            firstNameErrorText : '',
            lastNameError : false,
            lastNAmeErrorText : '',
            sayAnythingError : false,
            sayAnythingErrorText : ''
        }

        if(input1 === '') {
            errors.firstNameError = true;
            errors.firstNameErrorText = 'First Name can not be empty';
        }

        if (input2 === '') {
            errors.lastNameError = true;
            errors.lastNAmeErrorText = 'Last Name can not be empty';
        }

        if (input3 === '') {
            errors.sayAnythingError = true;
            errors.sayAnythingErrorText = 'Ahn Ahn Say something naa, anything at all';
        }

        setError((prevError) => ({
            ...prevError,
            ...errors,
        }))

        if (
            (input1 === '') ||
            (input2 === '') ||
            (input3 === '')
        ) {
            return
        }

        console.log(input1)
        console.log(input2)
        console.log(input3)

        setSubmitted(!submitted)
    }

    return (
        <>
            <div className="container">
                {!submitted ? (
                <form>
                    <div className={error.firstNameError ? 'error' : ''}>
                        <label>First Name</label>
                        <input value={input1} onChange={(e) => setInput1(e.target.value)} type="text" />
                        {error.firstNameError && <p>{error.firstNameErrorText}</p>}
                    </div>
                    <div className={error.lastNameError ? 'error' : ''}>
                        <label>Last Name</label>
                        <input value={input2} onChange={(e) => setInput2(e.target.value)} type="text" />
                        {error.lastNameError && <p>{error.lastNAmeErrorText}</p>}
                    </div>
                    <div className={error.sayAnythingError ? 'error' : ''}>
                        <label>Say Anything</label>
                        <input value={input3} onChange={(e) => setInput3(e.target.value)} type="text" />
                        {error.sayAnythingError && <p>{error.sayAnythingErrorText}</p>}
                    </div>
                    <input onClick={submit} type="submit" value="Submit" />
                </form> 
            ) : (
                <div className="thank-you-message">
                    <h2>Thank you for filling the form</h2>
                    <p>please check your console to see the details filled</p>
                    <button onClick={submit}>Go Back</button>
                </div>
            )}
            </div>
        </>
    )
}

export default ContactUs;