import React, { useState } from 'react';
import Axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object().shape({
  name: yup.string().required('Name should be required please'),
  email: yup.string().email(),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required(),
  address: yup.string().required('Address should be required please'),
});

const Form = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(0);
  const [address, setAddress] = useState('');

  const [buyersList, setBuyersList] = useState([]);
  const [lastId, setLastId] = useState(0);

  const getLastId = () => {
    Axios.get('http://localhost:3001/buyers')
      .then((response) => {
        setLastId(response.length);
      })
      .catch((err) => console.log(err));
  };

  const addBuyers = () => {
    Axios.post('http://localhost:3001/buyers', {
      id: id,
      name: name,
      email: email,
      phone: phone,
      address: address,
    }).then(() => {
      setBuyersList([
        ...buyersList,
        {
          id: id,
          name: name,
          email: email,
          phone: phone,
          address: address,
        },
      ]);
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });

  function watching() {
    watch('name');
    watch('email');
    watch('phoneNumber');
    watch('address');
  }
  watching();

  const handleFormSubmit = () => {
    getLastId();
    setId(lastId + 1);
    console.log(JSON.stringify(watch(), null));
    addBuyers();
  };

  return (
    <div className='Form'>
      <div className='inputs'>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <h3>Name:</h3>
          <input
            {...register('name')}
            type='text'
            name='name'
            onChange={(event) => {
              setName(event.target.value);
            }}
            placeholder='Your name...'
          />
          <p> {errors.name?.message} </p>
          <h3>Email:</h3>
          <input
            {...register('email')}
            type='text'
            name='email'
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            placeholder='Email...'
          />
          <p> {errors.email?.message} </p>
          <h3>Phone:</h3>
          <input
            {...register('phoneNumber')}
            type='tel'
            name='phoneNumber'
            onChange={(event) => {
              setPhone(event.target.value);
            }}
            placeholder='Phone Number...'
          />
          <p> {errors.phoneNumber?.message} </p>
          <h3>Address:</h3>
          <input
            {...register('address')}
            type='text'
            name='address'
            onChange={(event) => {
              setAddress(event.target.value);
            }}
            placeholder='Your address...'
          />
          <p> {errors.address?.message} </p>
          <input type='submit' id='submit' value='Submit' />
        </form>
      </div>
    </div>
  );
};

export default Form;
