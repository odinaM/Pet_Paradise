import photo from '../../assets/icons/photo.svg';
import profile from '../../assets/icons/profile.svg';
import detail from '../../assets/icons/detail.svg';
import edit from '../../assets/icons/edit.svg';
import fullName from '../../assets/icons/FullName.svg';
import email from '../../assets/icons/email_acount.svg'; 
import phone from '../../assets/icons/Phone.svg';  

export function Account(){
    return(
        <main className="account">
            <section className="section_acount">
                <div className="hero_acount">
                    <div className="left_block_acount">
                        <div className="left_mini_inf">
                            <div className="photo_acount">
                                <img src={photo} alt="photo" />
                            </div>
                            <div className="photo_acount">
                                <p className="left_mini_inf_title" id='name_acount'>Dane Nguyen</p>
                                <p className="left_mini_inf_desc" id='status_acount'>Dashboard</p>
                            </div>
                        </div>
                        <div className="my_acount_pet">
                            <div className="inside_my_acount">
                                <img src={profile} alt="profile" />
                                <p className="inside_my_acount_title">My Account & Pet</p>
                            </div>
                        </div>
                    </div>
                    <div className="right_block_acount">
                        <div className="block_acount_detail">
                            <img src={detail} alt="detail" />
                            <p className="desc_acount_detail">Account Detail</p>
                        </div>
                        <div className="informationa-and_card">
                            <div className="information_acount">
                                <div className="block1_acount_information">
                                    <h1 className="block1_acount_information_title">Information</h1>
                                    <button className='block1_acount_information_btn'>Edit <img src={edit} alt="" /></button>
                                </div>
                                <div className="block2_acount_information">
                                    <div className="left_block2_acount_information">
                                        <div className="fullname_acount">
                                            <img src={fullName} alt="full Name" />
                                            <p className="left_block2_acount_information_desc">Full name</p>
                                        </div>
                                        <p className="left_block2_acount_information_title">Nguyen Thien Phu</p>
                                    </div>

                                    <div className="right_block2_acount_information">
                                        <div className="email_acount">
                                            <img src={email} alt="email" />
                                            <p className="left_block2_acount_information_desc">Email</p>
                                        </div>
                                        <p className="left_block2_acount_information_title">anhdansgvn@gmail.com</p>
                                    </div>
                                </div>

                                <div className="block3_acount_information">
                                    <div className="left_block3_acount_information">
                                        <div className="phone_acount">
                                            <img src={phone} alt="phone" />
                                            <p className="left_block2_acount_information_desc">Phone number</p>
                                        </div>
                                        <p className="left_block2_acount_information_title">(093) 8772 - 416</p>
                                    </div>

                                    <div className="right_block2_acount_information">
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="card_acount">
                                <div className="block1_acount_information">
                                    <h1 className="block1_acount_information_title">Card</h1>
                                    <button className='block1_acount_information_btn'>Edit <img src={edit} alt="" /></button>
                                </div>

                                <div className="block2_acount_information">
                                    <div className="left_block2_acount_information">
                                        <div className="fullname_acount">
                                            <img src={fullName} alt="full Name" />
                                            <p className="left_block2_acount_information_desc">Full name</p>
                                        </div>
                                        <p className="left_block2_acount_information_title">Nguyen Thien Phu</p>
                                    </div>

                                    
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}