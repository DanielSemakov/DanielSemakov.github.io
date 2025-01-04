from sqlalchemy import ForeignKey, Integer, Column, Date, String
from sqlalchemy.orm import relationship

from api.dependencies.database import Base

#Maybe I should rename this to "UserComment" or just "Comment" for clarity
class EventComment(Base):
    __tablename__ = "event_comments"

    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    date = Column(Date, nullable=False)
    message = Column(String(500), nullable=False)

    user = relationship("User", back_populates="event_comments")