import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#dee2e6', // fallback if you don't use gradient
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  logo: {
    width: width * 0.5,
    height: height * 0.15,
    marginBottom: 10,
  },
  tagline: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#444',
    marginBottom: 40,
  },
  selectLabel: {
    alignSelf: 'flex-start',
    fontSize: 14,
    color: '#333',
    marginBottom: 6,
  },
  pickerWrapper: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 24,
    overflow: 'hidden',
  },
  picker: {
    width: '100%',
    height: 50,
  },
  loginButton: {
    backgroundColor: '#002d72',
    width: '100%',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
