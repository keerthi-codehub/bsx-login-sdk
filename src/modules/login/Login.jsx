import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import FloatingInput from "../../components/FloatingInput/FloatingInput";
import {Button} from '../../components/Button'
// import Link from 'next/link';

// import ActivationHeader from "./component/ActivationHeader";
import { USER_LOGIN_FORM } from "./constants";
import { ActivationFooter, ActivationHeader } from "./components";
// import {}
// 	userSignIn,
// 	redirectToMarketplace,
// } from '../../../global/services/userService';
import "./login.css";

/**
 * Represents login Form.
 */
const LoginScreen = ({ siteLogo }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
    watch,
    setError,
  } = useForm({
    mode: "onSubmit",
  });

  const [loading, setLoading] = useState(false);

  watch();

  const mapValues = () => {
    const values = getValues();

    return {
      username: values?.username,
      password: values?.password,
      idpType: "COGNITO",
      application: "marketplace",
    };
  };

  const onSubmit = async () => {
    setLoading(true);
    // try {
    // 	const { authGrantCode, response } = await userSignIn(mapValues());

    // 	if (authGrantCode) {
    // 		redirectToMarketplace(authGrantCode);
    // 	} else if (response.status === 401) {
    // 		setError('password', {
    // 			message: USER_LOGIN_FORM.INVALID_USER,
    // 		});
    // 	} else {
    // 		setError('password', {
    // 			message: USER_LOGIN_FORM.ERROR_MESSAGE,
    // 		});
    // 	}
    // 	setLoading(false);
    // } catch (e) {
    // 	setError('password', {
    // 		message: USER_LOGIN_FORM.ERROR_MESSAGE,
    // 	});
    // 	setLoading(false);
    // }
  };

  /**
   * Returns true if all required fields are entered else returns false.
   */
  const hasRequiredFields = () => {
    const { username, password } = getValues();

    return !!username && !!password;
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        handleSubmit(onSubmit)();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="card">
      <ActivationHeader
        title={USER_LOGIN_FORM.TITLE}
        subtitle={USER_LOGIN_FORM.MESSAGE}
        siteLogo={siteLogo}
      />

      <form noValidate>
        <div className="element-wrapper">
          <Controller
            name="username"
            rules={{
              required: {
                value: true,
                message: USER_LOGIN_FORM.REQUIRED_USER_NAME,
              },
            }}
            control={control}
            render={({ field }) => {
              return (
                <FloatingInput
                  aria-invalid={errors?.username ? "true" : "false"}
                  errors={errors.username}
                  type="text"
                  errorMsg={errors.username?.message}
                  label="Username"
                  variant="vehicleDetails"
                  {...field}
                />
              );
            }}
          />
        </div>

        <div className="element-wrapper">
          <Controller
            name="password"
            rules={{
              required: {
                value: true,
                message: USER_LOGIN_FORM.REQUIRED_PASSWORD,
              },
            }}
            control={control}
            render={({ field }) => {
              return (
                <FloatingInput
                  aria-invalid={errors.password ? "true" : "false"}
                  errors={errors.password}
                  type="password"
                  errorMsg={errors.password?.message}
                  label="Password"
                  variant="vehicleDetails"
                  {...field}
                />
              );
            }}
          />
        </div>
      </form>

      <div className="forgot-wrapper">
        <a href="/forgot-password">Forgot password?</a>
      </div>

      <div className="button-wrapper">
        <Button appearance="primary" onClick={handleSubmit(onSubmit)} className="login-button">
          {"Continue test"}
        </Button>
        {/* <button
          type="button"
          className="activation-button"
          disabled={!hasRequiredFields()}
          onClick={handleSubmit(onSubmit)}
        >
          Continue */}
        {/* </button> */}
      </div>

      <ActivationFooter />
    </div>
  );
};

export default LoginScreen;
