import Head from 'next/head'
import React, { useEffect, useState } from 'react';
import { getCurrentStaff } from '../../api/staffApi';
// import { CustomZoomOut } from '../../components/CustomZoomOut';
// import { useRouter } from 'next/router'

const ProfessorDetail = ({title}) => {
    return (
        <div>
            <Head>
                <title>{title}</title>      
                <link href="/static/professor.css" rel="stylesheet" />
            </Head>
        </div>
    );
}
export const getServerSideProps = async () => {

  return {
    props: {
        title:'Chuyen Gia',
    },
  }
}
export default ProfessorDetail;
