import React from "react";
import { useState } from "react";
import { SiteHead } from "../../../layouts/components/ui/SiteHead";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { usePasswordReset } from "../../../layouts/api/auth/useAuth";
import { Alert, Grid, Link } from "@mui/material";

export default function Password() {
  const [email, setEmail] = useState("");
  const { success, error, passwordReset } = usePasswordReset();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    passwordReset(email);
  };

  return (
    <div>
      <SiteHead />
      <h2 className="m-5 my-12 text-center text-2xl font-semibold">
        パスワード再設定
      </h2>

      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="メールアドレス"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="outlined"
          sx={{ mt: 3, mb: 2 }}
        >
          送信
        </Button>

        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item>
            <Link href="/login" variant="body2">
              戻る
            </Link>
          </Grid>
        </Grid>
      </Box>

      {error && (
        <Alert severity="error">メールアドレスに送信できませんでした</Alert>
      )}
      {success && (
        <Alert severity="success">メールアドレスに送信しました</Alert>
      )}
    </div>
  );
}
