document.addEventListener('DOMContentLoaded',function(){
    const form = document.querySelector('form');
    form.addEventListener('submit',function (event){
        event.preventDefault();
        const formData = new FormData(form);
        fetch('submit_form.php',{
            method: 'POST',
            body: formData
        })
        .then(response => {
            if(response.ok)
            {
                alert('Message sent successfully!');
                form.reset();
            }
            else
            {
                throw new Error('Failed to send message.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to send message. Please try again later.');
        });
    });
});