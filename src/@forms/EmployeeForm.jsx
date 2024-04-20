import { useEmployee } from '../hooks';
import { TextField, Button, Box} from '@material-ui/core';


const EmployeeForm = () => {
    const {
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        notify,
        message,
        isSuccess,
        isError,
        isLoading,
        isSubmitting,
        setFieldValue
    } = useEmployee()
    
    return (
        <form
            onSubmit={handleSubmit}
            autoComplete='off'
            className='flex flex-col gap-2 py-4'
            style={{ maxWidth: '500px', margin: '0 auto' }}

        >
            <Box display="flex" flexGrow={1} justifyContent="center">
                <TextField
                    variant='outlined'
                    placeholder='Category Name'
                    label='Category Name'
                    id='Name'
                    name='Name'
                    value={values.Name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#CCCCCC'
                            }
                        },
                        width: '100%'
                    }}
                    className='transition-all ease-in-out'
                />
            </Box>
            <br/>
            <Box display="flex" justifyContent="flex-end" alignItems="center" gap={2}>
                <Button type='submit' variant="contained"
                    >
                        Add Employee
                </Button>
            </Box>
              
        </form>
    )
}

export default EmployeeForm