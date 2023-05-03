import { connectToDatabase } from '../utils/mongodb';
import styles from '../styles/registerdata.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';


export default function Home({ data }) {
  const [status, setStatus] = useState(null);
  const router = useRouter();


  const handleDelete = async (registrationid) => {
    const { id } = router.query;
    console.log(registrationid)

    try {
      const response = await fetch(`/api/mainapi/`, {
        method: 'DELETE',
        body:registrationid,
      });

      if (response.ok) {
        setStatus('successfuly Deleted');
        router.reload();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div class='container'>
      <div class='row justify-content-md-center row-cols-auto'>
      <div class="col-lg-12 col-md-6 col-sm-2">
      <h1>All Registrations</h1>
      <div className={styles.successmessage}>
      <p>{status}</p>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Mobile Number</th>
            <th>National ID</th>
            <th>Position</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((registration) => (
            <tr key={registration._id}>
              <td>{registration.fullName}</td>
              <td>{registration.mobileNumber}</td>
              <td>{registration.nationalID}</td>
              <td>{registration.position}</td>
              <td>
                  <button class='btn btn-danger' onClick={() => handleDelete((registration["_id"]))}>Delete</button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </div>
    </div>
  );
}



export async function getServerSideProps() {
  const { db } = await connectToDatabase();
  const data = await db.collection('profile_registration').find().toArray();
  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    },
  };
}
