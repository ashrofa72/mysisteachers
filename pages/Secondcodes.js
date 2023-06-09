import React, { useState } from 'react'
import Codes from '../data/second.json'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Firstcodes = () => {
    const [students, setStudents] = useState([])
    const [studentId, setStudentId] = useState('')
    const [studentName, setStudentName] = useState('')
    const CodesfilterId = Codes.filter(studentcode => { return studentcode.stnationalid === studentId })
    const CodesfilterName = Codes.filter(studentname => { return studentname.stname.match(studentName)})

    const handleSearchId = (e) => {
        e.preventDefault();

        setStudents(CodesfilterId)
    }
    const handleSearchName=(e)=>{
        e.preventDefault();
        setStudents(CodesfilterName)

    }
    

    return (
        <div className='container text-center' style={{ background: '#f2f2f2' }}>
            <h1 className='display-5 p-3'>بيانات طلاب الصف الثاني</h1>
            <div className='row row-cols-12'>
               {/* <div className='col-6'>
                    <form>
                        <input className='text-center' type='text'
                            onChange={(e) => setStudentId(e.target.value)}
                            value={studentId}
                            placeholder='Student ID'
                        />
                        <button className='btn btn-success mx-3' onClick={handleSearchId}>Search</button>
                    </form>

                    <div>
                        {students.map(student => (
                            <div className='my-4 mx-4'>
                                <ul className='list-unstyled'>
                                    <li key={student.id}>
                                    <h3>اسم الطالبة ({student.stname})</h3>
                                        <p>كود الطالب {student.stcode}</p>
                                        <p> الرقم القومي {student.stnationalid}</p>
                                        <p>تاريخ الميلاد {student.stbirthdate}</p>
                                        <p>{student.stcode}@qena1.moe.edu.eg</p>
                                        <p>كلمة المرور Std#{student.stnationalid.slice(1, 7)}</p>
                                    </li>
                                </ul>
                            </div>


                        ))}
                    </div>
                        </div>*/}
                <div className='col-12'>
                    <form>
                        <input className='text-center' type='text'
                            onChange={(e) => setStudentName(e.target.value)}
                            value={studentName}
                            placeholder='Student Name'
                        />
                        <button className='btn btn-success mx-3' onClick={handleSearchName}>Search</button>
                    </form>

                   {/* <div>
                        {students.map(student => (
                            <div className='my-4 mx-4'>
                                <ul className='list-unstyled'>
                                    <li key={student.id}>
                                        <h3>اسم الطالبة ({student.stname})</h3>
                                        <p>كود الطالب {student.stcode}</p>
                                        <p> الرقم القومي {student.stnationalid}</p>
                                        <p>تاريخ الميلاد {student.stbirthdate}</p>
                                        <p>{student.stcode}@qena1.moe.edu.eg</p>
                                        <p>كلمة المرور Std#{student.stnationalid.slice(1, 7)}</p>
                                    </li>
                                </ul>
                            </div>


                        ))}
                        </div>*/}
                    <div>
                    {students.map(student => (
                            <Card variant='outlined' sx={{ minWidth: 275,my:2 }}>

                                <CardContent>
                                    <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                                         بيانات الطالبة
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                        <h3>اسم الطالبة ({student.stname})</h3>
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        <p>كود الطالب {student.stcode}</p>
                                        <p> الرقم القومي {student.stnationalid}</p>
                                        <p>تاريخ الميلاد {student.stbirthdate}</p>
                                    </Typography>
                                    <Typography variant="body2">
                                    <p>{student.stcode}@qena1.moe.edu.eg</p>
                                        <p>كلمة المرور Std#{student.stnationalid.slice(1, 7)}</p>
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>

                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Firstcodes