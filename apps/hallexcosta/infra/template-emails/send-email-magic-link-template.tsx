const SendEmailMagicLinkTemplate = ({ url }) => {
  return (
    <div className="bg-gray-100 p-5 text-gray-800">
      <div className="max-w-md mx-auto bg-white p-5 border border-gray-300">
        <h1 className="text-lg text-gray-900">Hi there,</h1>
        <p>
          We're thrilled to have you with us! To kickstart your journey and gain
          full access to all features, please activate your account by verifying
          your email address. Simply click the link below to complete the setup
          process:
        </p>
        <a
          href={url}
          className="block w-48 py-2 mx-auto bg-blue-500 text-white text-center rounded mt-4 mb-2"
        >
          Activate Account
        </a>
        <p>or copy link ${url}</p>
        <p>
          Please note: This link will expire in 24 hours for your security.
          Should you encounter any issues or have any questions, our support
          team is ready to assist you.
        </p>
        <p>Thank you for choosing xLLex Company!</p>
        <div className="text-center text-sm text-gray-600 mt-5">
          Best regards,
          <br />
          Hállex Costa
          <br />
          Customer Support Team
          <br />
          xLLex Company
          <br />
          Phone: (18) 99788-7240
          <br />
          Visit us at:{' '}
          <a href="http://hallexcosta.com" className="text-blue-500">
            hallexcosta.com
          </a>
        </div>
      </div>
    </div>
  )
}

export { SendEmailMagicLinkTemplate }
