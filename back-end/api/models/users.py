from sqlalchemy import String, Column, Integer
from sqlalchemy.orm import relationship

from api.dependencies.database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, autoincrement=True)
    fname = Column(String(30), nullable=False)
    lname = Column(String(30))
    phone_num = Column(String(15), nullable=True)
    username = Column(String(100), unique=True)
    password_hash = Column(String(100), nullable=False)

    event_comments = relationship("EventComment", back_populates="users")

#"nullable = False" means the value of the attribute can't be null
#"unique = True" means each row must have a unique value for this attribute
#If the attribute is a primary key, I assume this is already implicitly the case