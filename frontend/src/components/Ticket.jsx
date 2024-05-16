import React from 'react';
import { PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
  },
  section: {
    margin: 10,
    textAlign: 'left',
  },
});

const Ticket = ({ bookingDetails }) => {
  return (
    <>
    <div className="text-center mt-4">
      <p ><span id='span1-payments'>Here's your Ticket!</span></p>
    </div>
    <PDFViewer style={{ width: '100%', height: '100vh' }}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>TRIP TO HEAVEN TICKET</Text>
            <Text> </Text>
            <Text>From: {bookingDetails.origin}</Text>
            <Text>To: {bookingDetails.destination}</Text>
            <Text>--------------------------</Text>
            {bookingDetails.passengers.map((passenger, index) => (
              <View key={index}>
                <Text>Reference Number: {passenger.referenceNumber}</Text>
                <Text>Name: {passenger.name}</Text>
                <Text>Seat No.: {passenger.SeatNum}</Text>
                <Text>Departure Time: {passenger.departureTime}</Text>
                <Text>Arrival Time: {passenger.arrivalTime}</Text>
                <Text>Date: {passenger.date}</Text>
                <Text>Fare: {passenger.expense}</Text>
                <Text>--------------------------</Text>
              </View>
            ))}
          </View>
        </Page>
      </Document>
    </PDFViewer>
    
    </>
  );
};

export default Ticket;