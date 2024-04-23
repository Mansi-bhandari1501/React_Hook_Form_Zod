"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  // height: "45%",
  bgcolor: "background.paper",
  // border: '2px solid #000',
  boxShadow: 24,
  p: "16px 24px 16px 24px",
};


import { TSignUpSchema, signUpSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
export default function FormWithReactHookFormAndZod() {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: TSignUpSchema) => {
    // TODO: submit to server
    // ...
    console.log(data)
    // await new Promise((resolve) => setTimeout(resolve, 1000));

    reset();
  };

  return (

    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <form onSubmit={handleSubmit(onSubmit)} >
          <Box sx={{ flexGrow: 1 }}>
            <Typography
            
              fontSize={"22px"}
              fontStyle={"normal"}
              fontWeight={600}
              letterSpacing={"0.15px"}
              color={"#424242"} 
              lineHeight={"28px"}  
              // fontFamily={ "Inter var"}
              marginTop={"16px"}
              marginBottom={"16px"}
            >Create Survey</Typography>

            <Grid container spacing={2.1}>
              <Grid item xs={12}>
                {/* <Item>xs=6 md=8</Item> */}
                <TextField
                error={errors.surveyName as Boolean|undefined|| false}
                 {...register("surveyName")}
                  size="large"
                  type="text"
                  sx={{ width: "100%"  }}
                  label="Survey Name"
                />
                {errors.surveyName && (
        <p className="text-red-500">{`${errors.surveyName.message}`}</p>
      )}
              </Grid>
              <Grid item xs={6}>
                {/* <Item>xs=6 md=4</Item> */}
                <TextField
                 error={errors?.abbrevation ? true:false}
                 {...register("abbrevation")}
                  size="medium"
                  type="text"
                  sx={{ width: "100%"}}
                  label="Abbrevation"
                />
                  {errors.abbrevation && (
        <p className="text-red-500">{`${errors.abbrevation.message}`}</p>
      )}
                
              </Grid>
              <Grid item xs={6}>
                {/* <Item>xs=6 md=4</Item> */}
                <TextField
                error={errors.type}
                {...register("type")}
                  size="medium"
                  // type="text"
                  select
                  sx={{ width: "100%" }}
                  label="Type of Survey"
                  >
                   <MenuItem key={"ABCD"} value={"ABCD"}>
                   ABCD
                   </MenuItem>
            </TextField>
                 {errors.type && (
                  <p className="text-red-500">{`${errors.type.message}`}</p>
      )}
              </Grid>
              <Grid item xs={6}>
                {/* <Item>xs=6 md=8</Item> */}
                <TextField
                error={errors.modality}
                {...register("modality")}
                  size="medium"
                  // type="text"
                  select
                  sx={{ width: "100%"}}
                  label="Modality"
                  >
                   <MenuItem key={"Online"} value={"Online"}>
                   Online
                   </MenuItem>
            </TextField>
                                 {errors.modality && (
        <p className="text-red-500">{`${errors.modality.message}`}</p>
      )}
              </Grid>
              <Grid item xs={6}>
                {/* <Item>xs=6 md=8</Item> */}
                <TextField
                error={errors.language}
                {...register("language")}
                  size="medium"
                  // type="text"
                  select
                  sx={{ width: "100%"}}
                  label="Language"
                >
                   <MenuItem key={"spanish"} value={"spanish"}>
                   spanish
                   </MenuItem>
            </TextField>
                
                {errors.language && (
                <p className="text-red-500">{`${errors.language.message}`}</p>
      )}
              </Grid>
            </Grid>
            <Stack direction={"row"} marginTop={2}>
              <Switch {...label} />
              <Box>
                <Typography
                fontSize={"16px"}
                fontStyle={"normal"}
                fontWeight={400}
                letterSpacing={"0.15px"}
                color={"#424242"} 
                lineHeight={"16.5px"}  
                // fontFamily={ "Open Sans"}
                >Mandatory</Typography>
                <Typography
                  fontSize={"12px"}
                  fontStyle={"normal"}
                  fontWeight={400}
                  letterSpacing={"0.60px"}
                  color={"#616161"} 
                  lineHeight={"16.5px"}  
                  // fontFamily={ "Open Sans"}
                >
                  Toggle survey's mandatory status
                </Typography>
              </Box>
            </Stack>
          </Box>
          <Stack direction={"row"} justifyContent={"flex-end"} marginTop={"16px"}>
            <Button 
            onClick={handleClose}
            sx={{color:"black",fontWeight:"500"}}>Cancel</Button>
            <Button
            sx={{fontWeight:"600"}}
            disabled={isSubmitting}
                type="submit"
            >Create</Button>
          </Stack>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
