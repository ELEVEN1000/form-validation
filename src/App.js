import './App.css';
import {useForm} from 'react-hook-form';

function App() {
    const onSubmit = (data) => {
        alert(JSON.stringify(data))
        reset();
    }
    const {
        register,
        formState: {
            errors,
        },
        reset,
        handleSubmit,
    } = useForm({
        mode: "onBlur"
    });
  return (
    <div className="App">
      <h1 className="title">React form</h1>
        <form className="form-first-name">
            <label className="label-first-name" for="first-name">First name:</label>
            <input id="first-name" className="first-input" {...register('firstName', {
                required: "Поле обязательно к заполнению",
                minLength: {
                    value: 2,
                    message: "Минимум 2 символа"
                },
                maxLength: {
                    value: 15,
                    message: "Максимум 15 символов"
                },
            })
            }/>
            <span >{errors?.firstName && <p className="first-name-error">{errors?.firstName?.message || "Error"}</p>}</span>
        </form>

        <form onSubmit={handleSubmit(onSubmit)}>
            <input className="btn-submit" type="submit"/>
        </form>
    </div>
  );
}

export default App;
