"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import Typography from "../design-system/atoms/Typography";
import Form from "../design-system/molecules/form";
import TextField from "../design-system/atoms/TextField";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import Button from "../design-system/atoms/Button";
import TitlePage from "../design-system/atoms/TitlePage";

type Props = {
  className?: string;
  callbackUrl?: string;
  error?: string;
};

const Login = (props: Props) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAlert, setIsAlert] = useState(false);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setIsAlert(false);
    const res = await signIn("credentials", {
      username: email,
      password: password,
      redirect: false,
    });

    if (!res?.error) {
      router.push(props.callbackUrl ?? "http://localhost:3000");
      router.refresh();
    } else {
      setIsAlert(true);
    }
  };
  return (
    <Box>
      {isAlert && (
        <Alert icon={<CheckIcon fontSize="inherit" />} severity={"error"}>
          Email ou mot de passe incorrect
        </Alert>
      )}
      <TitlePage>Signin</TitlePage>
      <Form>
        <TextField
          label="Email"
          value={email}
          onChange={(e: any) => {
            setEmail(e.target.value);
          }}
          sx={{ mb: 4 }}
        />
        <TextField
          label="Mot de passe"
          value={password}
          onChange={(e: any) => {
            setPassword(e.target.value);
          }}
          sx={{ mb: 4 }}
          type="password"
        />
        <Button label="S'enregistrer" onClick={onSubmit} />
      </Form>
    </Box>
  );
};

export default Login;
