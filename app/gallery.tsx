"use client";

import { useState } from "react";
import Avatar from "boring-avatars";
import {
  FaRegCircleXmark,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";

import Controls from "./controls";
import Modal from "./modal";

import { User } from "./types/user";

export type GalleryProps = {
  users: User[];
};

export type SortOption = {
  field?: string,
  direction?: string,
}

const Gallery = ({ users }: GalleryProps) => {
  const [usersList, setUsersList] = useState(users);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortField, setSortField] = useState<string>()
  const [sortDirection, setSortDirection] = useState<string>()

  const handleModalOpen = (id: number) => {
    const user = usersList.find((item) => item.id === id) || null;

    if (user) {
      setSelectedUser(user);
      setIsModalOpen(true);
    }
  };

  const handleModalClose = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };

  const handleSort = (option: SortOption) => {
    const copy = [...usersList]
    switch (option.field) {
      case "name":
        if (option.direction === "descending")
          copy.sort((a, b) => b.name.localeCompare(a.name));
        else
          copy.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "company":
        if (option.direction === "descending")
          copy.sort((a, b) => b.company.name.localeCompare(a.company.name));
        else
          copy.sort((a, b) => a.company.name.localeCompare(b.company.name));
        break;
      case "email":
        if (option.direction === "descending")
          copy.sort((a, b) => b.email.localeCompare(a.email));
        else
          copy.sort((a, b) => a.email.localeCompare(b.email));
        break;
      default:
        break
    }
    setUsersList(copy);
  }

  const handleSortDirectionChange = (value?: string) => {
    handleSort({ field: sortField, direction: value })
    setSortDirection(value)
  }

  const handleSortFieldChange = (value?: string) => {
    handleSort({ field: value, direction: sortDirection })
    setSortField(value)
  }

  return (
    <div className="user-gallery">
      <div className="heading">
        <h1 className="title">Users</h1>
        <Controls
          onSortDirectionSelect={handleSortDirectionChange}
          onSortFieldSelect={handleSortFieldChange}
        />
      </div>
      <div className="items">
        {usersList.map((user, index) => (
          <div
            className="item user-card"
            key={index}
            onClick={() => handleModalOpen(user.id)}
          >
            <div className="body">
              <Avatar
                size={96}
                name={user.name}
                variant="marble"
                colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
              />
            </div>
            <div className="info">
              <div className="name">{user.name}</div>
              <div className="company">{user.company.name}</div>
            </div>
          </div>
        ))}
        <Modal isOpen={isModalOpen} onClose={handleModalClose}>
          <div className="user-panel">
            <div className="header">
              <div
                role="button"
                tabIndex={0}
                className="close"
                onClick={handleModalClose}
              >
                <FaRegCircleXmark size={32} />
              </div>
            </div>
            <div className="body">
              {selectedUser && (
                <div className="user-info info">
                  <div className="avatar">
                    <Avatar
                      size={240}
                      name={selectedUser.name}
                      variant="marble"
                      colors={[
                        "#92A1C6",
                        "#146A7C",
                        "#F0AB3D",
                        "#C271B4",
                        "#C20D90",
                      ]}
                    />
                  </div>
                  <div className="name">
                    {selectedUser.name} ({selectedUser.username})
                  </div>
                  <div className="field">
                    <FaLocationDot className="icon" />
                    <div className="data">{`${selectedUser.address.street}, ${selectedUser.address.suite}, ${selectedUser.address.city}`}</div>
                  </div>
                  <div className="field">
                    <FaPhone className="icon" />
                    <div className="value">{selectedUser.phone}</div>
                  </div>
                  <div className="fields">
                    <FaEnvelope className="icon" />
                    <div className="value">{selectedUser.email}</div>
                  </div>
                  <div className="company">
                    <div className="name">{selectedUser.company.name}</div>
                    <div className="catchphrase">
                      {selectedUser.company.catchPhrase}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Gallery;
