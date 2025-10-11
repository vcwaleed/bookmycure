const WhatsAppIcon = () => {
  const whatsappNumber = '923065167490';
  const message = 'Hi, I need your help to find lab tests.';
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  const styles = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: '1000',
    cursor: 'pointer',
  };

  const imgStyles = {
    width: '60px',
    height: '60px',
  };

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={styles}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png"
        alt="WhatsApp Icon"
        style={imgStyles}
      />
    </a>
  );
};

export default WhatsAppIcon;
