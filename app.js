

app.post('/email', async (req, res) => {
    try {
        const email = await sendEmail(
          "mailsanketagrawal@gmail.com",
            {
                name: 'Sanket',
                companyName: 'YourCompany',
                ctaLink: 'https://yourcompany.com/start',
                ctaText: 'Get Started',
                year: new Date().getFullYear()
            }
        );

        res.status(200).json({
            message :"sucess"
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            message :"failed"
        })
    }
})

app.listen(3000, () => {
    console.log('Server running');
});