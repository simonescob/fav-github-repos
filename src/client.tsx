import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://mlznwaqocckpcdnwgopk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sem53YXFvY2NrcGNkbndnb3BrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkzMDE3OTksImV4cCI6MjAwNDg3Nzc5OX0.4r_6_B_OMFUyPNY2gJraXH-kMNB6VgA3ZdFL1TI69Gk');

export {
  supabase
}