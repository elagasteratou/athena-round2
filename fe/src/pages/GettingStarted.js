
// function GettingStarted(onSubmit) {
//   const [image, setImage] = useState();
//   const [text, setText] = useState();
//   const onImageChange = (e) => setImage(e.target.files);
//   const onTextChange = (e) => setText(e.target.value);

//   return (
//     <Box
//       component="div"
//       sx={{
//         p: 8,
//         alignItems: 'center',
//         justifySelf: 'center',
//         height: '100%',
//       }}
//     >
//       <div>
//         <h1>Energy saving altneratives with just a picture</h1>
//       </div>
//       <p>Your address helps us generate a list of items you can replace</p>
//       <Box
//         component="form"
//         sx={{
//           m: 1,
//           width: '25ch',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           position: 'absolute',
//         }}
//         noValidate
//         autoComplete="off"
//       >
//         <TextField
//           id="outlined-basic"
//           label="Address"
//           variant="outlined"
//           onChange={onTextChange}
//           sx={{ width: '100%' }}
//         />
//         <Button
//           type="submit"
//           onClick={onSubmit(text)}
//           variant="contained"
//           sx={{ marginTop: '40px' }}
//         >
//           Find out my ECG Rating
//         </Button>
//       </Box>
//     </Box>
//   );
// }

// export default GettingStarted;
