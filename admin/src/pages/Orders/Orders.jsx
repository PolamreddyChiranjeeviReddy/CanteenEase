import React, { useEffect, useState } from 'react';
import './Orders.css';
import { toast } from 'react-toastify';
import axios from 'axios';
import { assets, url, currency } from '../../assets/assets';

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [searchId, setSearchId] = useState('');
  const [wannaSearch, setWannaSearch] = useState(false);

  const fetchAllOrders = async () => {
    const response = await axios.get(`${url}/api/order/list`);
    if (response.data.success) {
      setOrders(response.data.data.reverse());
    } else {
      toast.error('Error');
    }
  };

  const statusHandler = async (event, orderId) => {
    const response = await axios.post(`${url}/api/order/status`, {
      orderId,
      status: event.target.value,
    });
    if (response.data.success) {
      await fetchAllOrders();
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className='order add'>
      <h3>Order Page</h3>

      <div className='order-list'>
        <div className='search-order'>
          {/* <div className='search-order-input'> */}
            <input
              onChange={ (e) => {setSearchId(e.target.value);setWannaSearch(false)}}
              type='text'
              placeholder='Search The Order'
              value={searchId}
            />
          {/* <div className='search-order-button'> */}
            <button onClick={() => setWannaSearch(true)}>Search</button>
          {/* </div> */}
        </div>

        {(() => {
          if (!wannaSearch) {
            return orders.map((order, index) => (
              <div key={index} className='order-item'>
                <img src={assets.parcel_icon} alt='' />
                <div>
                  <p className='order-item-food'>
                    {order.items.map((item, index) => {
                      return index === order.items.length - 1
                        ? `${item.name} x ${item.quantity}`
                        : `${item.name} x ${item.quantity}, `;
                    })}
                  </p>
                  {/* console.log(order); */}
                  <div className='order-item-name'>
                    <p>{order.address.firstName}</p>
                    <label>Code:</label><p className='order-item-id'>{order.address.lastName}</p>
                    <br/>
                    <label>Payment:</label><p className='order-item-id'>{`${order.payment}`}</p>
                  </div>
                  <div className='order-item-address'>
                    <p>{order.address.street},</p>
                    <p>{`${order.address.city}, ${order.address.state}, ${order.address.country}, ${order.address.zipcode}`}</p>
                  </div>
                  <p className='order-item-phone'>{order.address.phone}</p>
                </div>
                <p>Items: {order.items.length}</p>
                <p>{currency}{order.amount}</p>
                <select
                  onChange={(e) => statusHandler(e, order._id)}
                  value={order.status}
                >
                  <option value='Food Processing'>Food Processing</option>
                  <option value='Out for delivery'>Out for delivery</option>
                  <option value='Delivered'>Delivered</option>
                </select>
              </div>
            ));
          } else {
            return orders
              .filter(order => order.address.lastName.toLowerCase().includes(searchId.toLowerCase()))
              .map((order, index) => (
                <div key={index} className='order-item'>
                  <img src={assets.parcel_icon} alt='' />
                  <div>
                    <p className='order-item-food'>
                      {order.items.map((item, index) => {
                        return index === order.items.length - 1
                          ? `${item.name} x ${item.quantity}`
                          : `${item.name} x ${item.quantity}, `;
                      })}
                    </p>
                    <div className='order-item-name'>
                      <p>{order.address.firstName}</p>
                      <label>Code:</label><p className='order-item-id'>{order.address.lastName}</p>
                      <br/>
                      <label>Payment:</label><p className='order-item-id'>{`${order.payment}`}</p>
                    </div>
                    <div className='order-item-address'>
                      <p>{order.address.street},</p>
                      <p>{`${order.address.city}, ${order.address.state}, ${order.address.country}, ${order.address.zipcode}`}</p>
                    </div>
                    <p className='order-item-phone'>{order.address.phone}</p>
                  </div>
                  <p>Items: {order.items.length}</p>
                  <p>{currency}{order.amount}</p>
                  <select
                    onChange={(e) => statusHandler(e, order._id)}
                    value={order.status}
                  >
                    <option value='Food Processing'>Food Processing</option>
                    <option value='Out for delivery'>Out for delivery</option>
                    <option value='Delivered'>Delivered</option>
                  </select>
                </div>
              ));
          }
        })()}
      </div>
    </div>
  );
};

export default Order;

