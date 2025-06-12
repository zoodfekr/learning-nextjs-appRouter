import { postType } from '@/types/posts'
import React from 'react'

const Show_post = ({ Data }: { Data: postType }) => {
    return (
        <div style={{
            marginTop: '5rem',
            maxWidth: '600px',
            margin: '40px auto',
            padding: '32px',
            background: '#fff',
            borderRadius: '16px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
            border: '5px solid purple'
        }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '16px', color: '#333' }}>{Data.title}</h2>
            <p style={{ color: '#666', marginBottom: '24px' }}>{Data.body}</p>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '0.95rem',
                color: '#888'
            }}>
                <span>Post ID: {Data.id}</span>
                <span>User ID: {Data.userId}</span>
            </div>
        </div>
    )
}

export default Show_post