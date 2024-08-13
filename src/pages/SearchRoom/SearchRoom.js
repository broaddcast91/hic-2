import React, { useState } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";

const SearchRoom = () => {
  const [roomType, setRoomType] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [roomStatus, setRoomStatus] = useState(null);

  const fetchBookedRoomsByDate = async (checkInDate, checkOutDate, roomId) => {
    let responseData;

    try {
      const response = await axios.get(
        `https://hic-backend.onrender.com/getBookedroomBydate?checkIn=${checkInDate}&checkOut=${checkOutDate}&room=${roomId}`
      );
      setRoomStatus(response.data);
      const message = response.data.message;
      responseData = { data: response.data, message };
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          setRoomStatus({ status: false, message: "Rooms are not available" });
        }
      } else {
        console.error("Error fetching booked rooms:", error);
      }
      const message = error.response.data.message;
      responseData = { error: true, errorDetails: error, message };
    }

    return responseData;
  };

  const handleSearch = async () => {
    try {
      const response = await fetchBookedRoomsByDate(
        checkInDate,
        checkOutDate,
        roomType
      );
      console.log("Response:", response);
      alert(response.message);
    } catch (error) {
      console.error("Error fetching booked rooms:", error);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="container absolute flex-col items-center justify-center px-10 py-4 mx-auto text-sm text-black transform -translate-x-1/2 bg-white border-black md:px-10 sm:flex-col mt-7 bottom-1 left-1/2">
        <div className="flex flex-row items-center justify-between mx-6 my-1 ">
          <div>
            <label htmlFor="roomType" className="mr-2">
              Room Type:
            </label>
            <select
              id="roomType"
              className="p-2 border rounded-3xl"
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
            >
              <option disabled>Select Room Type</option>
              <option value="661901d82831864696c9ff70">
                Standard Room - Single
              </option>
              <option value="661902052831864696c9ff72">
                Standard Room - Double
              </option>
              <option value="661902282831864696c9ff74">
                Executive room - Single
              </option>
              <option value="661902402831864696c9ff76">
                Executive room - Double
              </option>
              <option value="661902732831864696c9ff78">
                Deluxe Room - Single
              </option>
              <option value="661902892831864696c9ff7a">
                Deluxe Room - Double
              </option>
              <option value="6619029d2831864696c9ff7c">
                Deluxe Suite - Single
              </option>
              <option value="661902bf2831864696c9ff7e">
                Deluxe Suite - Double
              </option>
            </select>
          </div>

          <div>
            <label htmlFor="startDate" className="mr-2">
              Start Date:
            </label>
            <DatePicker
              selected={checkInDate}
              onChange={(date) => setCheckInDate(date)}
              selectsStart
              startDate={checkInDate}
              endDate={checkOutDate}
              minDate={new Date()}
              dateFormat="dd/MM/yyyy"
              className="block w-full h-10 px-3 py-2 bg-white border border-gray-300 shadow-sm rounded-3xl focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="endDate" className="mr-2">
              End Date:
            </label>
            <DatePicker
              selected={checkOutDate}
              onChange={(date) => setCheckOutDate(date)}
              selectsEnd
              disabled={checkInDate === ""}
              startDate={checkInDate}
              endDate={checkOutDate}
              minDate={checkInDate}
              dateFormat="dd/MM/yyyy"
              className="block w-full h-10 px-3 py-2 bg-white border border-gray-300 shadow-sm rounded-3xl focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div>
            <div
              className="bg-[#F86F03] text-white py-2 px-12 hover:bg-orange-600 rounded-3xl "
              onClick={handleSearch}
            >
              Book
            </div>
          </div>
        </div>

        {roomStatus && roomStatus.message && (
          <div>
            <div
              className={`justify-center mt-1 pt-2 ${
                roomStatus.message === "Rooms are not available"
                  ? "text-red-500"
                  : "text-green-500"
              }`}
            >
              <h3 className="text-lg">{roomStatus.message}</h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchRoom;
