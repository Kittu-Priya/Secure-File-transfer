 // Import the Supabase library
 import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
 import bcrypt from 'https://cdn.jsdelivr.net/npm/bcryptjs/+esm';

 // Initialize Supabase client
 const SUPABASE_URL = 'https://yuvazdfycchptioxqdqj.supabase.co'; // Replace with your Supabase URL
 const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1dmF6ZGZ5Y2NocHRpb3hxZHFqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMjg5MDkwMywiZXhwIjoyMDQ4NDY2OTAzfQ.evnk7hlCrBywwtEN3STj1DbluMNrlcjppDm2eQDrbZY'; // Replace with your Supabase anon key
 const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

 // Handle form submission
 document.getElementById('register-form').addEventListener('submit', async (event) => {
     event.preventDefault();

     // Get form values
     const username = document.getElementById('username').value;
     const password = document.getElementById('password').value;

       // Hash the password
       const hashedPassword = bcrypt.hashSync(password, 10);


     try {
         // Insert data into Supabase table
         const { data, error } = await supabase.from('users').insert([
             { username: username, password: hashedPassword } // Replace 'users' with your table name
         ]);

         if (error) {
             console.error('Error inserting data:', error.message);
             alert('Failed to register user!');
         } else {
             console.log('User registered:', data);
             alert('User registered successfully!');
         }
     } catch (err) {
         console.error('Unexpected error:', err);
         alert('An error occurred!');
     }
 });