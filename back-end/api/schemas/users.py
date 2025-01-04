# from pydantic import BaseModel, Field
# from typing import Optional
#
#
# class UserBase(BaseModel):
#     # card_num: Optional[str] = Field(None, max_length=50)
#     # cvc: Optional[str] = Field(None, max_length=5)
#
#
# class UserCreate(CreditCardBase):
#     fname: str
#     lname: Optional[str] = Field(None, max_length=30)
#     phoneNum: Optional[str] = Field(None, max_length=15)
#     email: str
#     password: str
#
#
# class UserUpdate(BaseModel):
#     card_num: Optional[str] = Field(None, max_length=50)
#     cvc: Optional[str] = Field(None, max_length=5)
#
#
# class CreditCard(CreditCardBase):
#     payment_id: int
#
#     # IDK if the following is necessary, maybe already handled by  foreign key values
#     # payment: Payment
#     class Config:
#         orm_mode = True
