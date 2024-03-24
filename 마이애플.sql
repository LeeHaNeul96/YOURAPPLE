create SEQUENCE yourApple_seq ;
create sequence appleBoard_seq;
create sequence images_seq;
commit;

Create table member (
Id varchar2(20) primary key,
Pw varchar2(20) ,
Address varchar2(200),
Tel varchar2(20),
Nickname varchar2(24)
);

Create table division(
divisionNo number primary key,
divisionName varchar2(30)
);

Create table yourApple(
yourAppleNo number primary key,
Title varchar2(300) ,
Price number,
Content varchar2(1000),
Dates Date default sysdate,
Id varchar2(24) references member(id),
divisionNo number references division(divisionNo)
);

Create table images(
imageNo number primary key,
YourAppleNo number references yourApple(yourAppleNo),
imageAddress varchar2(255),
Pr number default 0 check(pr in (0,1))
);


Create table appleBoard (
appleBoardNo number primary key,
Title varchar2(300),
Content varchar2(1500),
Id varchar2(24) references member(id),
Dates date default sysdate
);
 
 
 
 
 ------ 샘플데이터 ------
insert into member(id,pw,address,tel,nickName)
values('admin' ,  '1111' , '서울 특별시' , '010-1111-2222' , '어드민');
insert into member(id,pw,address,tel,nickName)
values('guest' ,  '1111' , '서울 특별시' , '010-7777-7777' , '손님1');
commit;


insert into division(divisionNo, divisionName)
values(1 , 'MAC');
insert into division(divisionNo, divisionName)
values(2 , 'IPAD');
insert into division(divisionNo, divisionName)
values(3 , 'IPHONE');
insert into division(divisionNo, divisionName)
values(4 , 'ETC');

commit;

insert into yourApple(yourAppleNo ,title,price,content,id,divisionNo )
values(yourApple_seq.nextval , '맥북팝니다.' , '800000' , '맥북팝니다 네고없습니다. ㅁㅇㅁㄴㅇㅁㅇㅁㄴㅇㅁㅇㅁㅇㅁㅇㅁㄴ' ,'guest' , 1 );
insert into yourApple(yourAppleNo ,title,price,content,id,divisionNo )
values(yourApple_seq.nextval , '맥북팝니다!!!!!.' , '950000' , '맥북팝니다 네고없습니다. ㅁㅇㅁㄴㅇㅁㅇㅁㄴㅇㅁㅇㅁㅇㅁㅇㅁㄴ' ,'guest' , 1 );
insert into yourApple(yourAppleNo ,title,price,content,id,divisionNo )
values(yourApple_seq.nextval , '아이패드 팔아요오.' , '700000' , '아이패드 팝니다 네고없습니다. ㅁㅇㅁㄴㅇㅁㅇㅁㄴㅇㅁㅇㅁㅇㅁㅇㅁㄴ' ,'guest' , 2 );
insert into yourApple(yourAppleNo ,title,price,content,id,divisionNo )
values(yourApple_seq.nextval , '아이폰 13 프로 팝니다. .' , '800000' , '맥북팝니다 네고없습니다. ㅁㅇㅁㄴㅇㅁㅇㅁㄴㅇㅁㅇㅁㅇㅁㅇㅁㄴ' ,'guest' , 3 );
insert into yourApple(yourAppleNo ,title,price,content,id,divisionNo )
values(yourApple_seq.nextval , '광택용 천 파라용.' , '30000' , '광택용 천 팔아요오오 다 네고없습니다. ㅁㅇㅁㄴㅇㅁㅇㅁㄴㅇㅁㅇㅁㅇㅁㅇㅁㄴ' ,'guest' , 4 );
commit;


insert into appleBoard(appleBoardNo, title,content,id)
values(appleBoard_seq.nextval , '첫번째 게시물',' 첫번째 내용' , 'guest');
insert into appleBoard(appleBoardNo, title,content,id)
values(appleBoard_seq.nextval , '두번째 게시물',' 두번째 내용' , 'guest');
insert into appleBoard(appleBoardNo, title,content,id)
values(appleBoard_seq.nextval , '세번째 게시물',' 세번째 내용' , 'guest');
insert into appleBoard(appleBoardNo, title,content,id)
values(appleBoard_seq.nextval , '네번째 게시물',' 네번째 내용' , 'guest');
insert into appleBoard(appleBoardNo, title,content,id)
values(appleBoard_seq.nextval , '다섯번째 게시물',' 다섯번째 내용' , 'guest');
insert into appleBoard(appleBoardNo, title,content,id)
values(appleBoard_seq.nextval , '여섯번째 게시물',' 여섯번째 내용' , 'guest');
insert into appleBoard(appleBoardNo, title,content,id)
values(appleBoard_seq.nextval , '일곱번째 게시물',' 일곱번째 내용' , 'guest');
insert into appleBoard(appleBoardNo, title,content,id)
values(appleBoard_seq.nextval , '여덟번째 게시물',' 여덟번째 내용' , 'guest');

commit;

insert into images


