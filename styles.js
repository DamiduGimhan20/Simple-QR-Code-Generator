import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: '#f5f5f5',
  },
  qrCodeContainer: {
    alignItems: 'center',
    marginVertical: 16,
    marginTop: 50,
  },
  qrCode: {
    marginTop: 60,
    width: 300,
    height: 300,
    borderColor: '#333',
    borderWidth: 5,
  },
  formContainer: {
    backgroundColor: '#333',
    borderRadius: 25,
    padding: 16,
    width: '100%',
    height: 310,
    marginTop: 140,
  },
  label: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  inputLabel: {
    color: '#fff',
    fontSize: 18,
    marginTop: 8,
  },
  input: {
    backgroundColor: '#444',
    color: '#fff',
    borderRadius: 4,
    padding: 8,
    marginTop: 4,
    height: 60,
    fontSize: 17,
  },
  button: {
    backgroundColor: '#a855f7',
    borderRadius: 4,
    padding: 12,
    marginTop: 40,
    alignItems: 'center',
    height: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
