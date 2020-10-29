import React, { useState, useEffect } from "react";
import style from "./SpecialDetail.module.css";
import Special from "../Special/Special";
const SpecialDetail = ({ match }) => {
  let content = match.params.specality.toUpperCase();
  useEffect(() => {
    document.getElementById("textcontent").scrollIntoView();
    // window.location.href = "#textcontent";
  }, [content]);
  return (
    <div>
      <h1 style={{ height: "50px", textAlign: "center" }}>SPECIALTIES</h1>
      <Special />
      <div className={style.content} id="textcontent">
        <h1 style={{ marginBottom: "12px" }}>
          <center>{content}</center>
        </h1>

        {content == "CARDIOLOGIST" && (
          <div>
            {" "}
            <p>
              Health Plus Clinic, Chennai is offering advanced cardiac treatment
              and care for all types of cardiac diseases. We have the best
              cardiology doctors in Chennai and the top cardiologists in
              Chennai, delivering exceptional cardiac care.
            </p>
            <p>
              <b>HEART HEALTH TIPS SAY NO TO TOBACCO</b> Smoking is one of the
              significant risk factors of developing heart disease. The
              chemicals present in tobacco damage the blood vessels leading to
              heart attack.
              <h3>REGULAR EXERCISE</h3> Physical activity can help you reduce
              your weight and will also reduce the chances of developing heart
              related problems. <h3>FOLLOW HEALTHY DIET</h3> Maintaining a
              healthy diet rich in fruits, vegetables and whole grains can help
              protect your heart. Avoid too much salt and sugar, and also try to
              keep trans-fat out of your diet. <h3>GET ENOUGH SLEEP</h3> Sleep
              plays an important role in your physical health. Good amount of
              sleep heals and repairs the heart and blood vessels. Sleep
              deficiency leads to many health problems.
              <h3>MANAGE STRESS</h3> Stress management is the need of the hour
              as stress is the main cause for a number of health problems.
              Indulge in physical activities and try relaxation techniques.{" "}
              <h3>GET REGULAR HEALTH SCREENINGS</h3> Regular health checkups
              will help you know the status of your health and will also look
              for diseases before the symptoms arise. It also helps in the early
              diagnosis and treatment.
            </p>
          </div>
        )}
        {content == "ENT SURGEON" && (
          <div>
            <p>
              The Department of ENT at Health plus clinic has a range of
              ingenious treatments which cater to the patients suffering with
              diseases related to the ear, nose and throat. We aim at providing
              the best service possible. The Department has a team of doctors
              trained by a group of faculty members from renowned institutions.
            </p>
            <p>
              The hospital has group of doctors with decades of experience in
              this field and adequate knowledge in radiology, audiological
              investigations which are usually required in the department of
              ENT. We have super specialized doctors in head & neck surgery.
              There is a team of highly skilled technicians and physicians who
              evaluate and interpret the results meticulously and provide
              correct reports to the specialists to take appropriate treatment
              decision.
            </p>
            <h3>PRECAUTIONS TO BE TAKEN</h3>
            <br />
            <h3>EAR CLEANING MISTAKES</h3>
            <p>
              Sticking any foreign body into your ears can be dangerous,
              especially if the thin skin of the ear canal is damaged.
            </p>
            <h3>LISTEN TO YOUR SIGNS</h3>
            <p>
              There may be many signs which are not directly related to an ear,
              nose or throat problem like a sore throat that won’t go away,
              experiencing ringing in your ears, or suffering from sleep apnea.
            </p>
            <h3>KEEP SWIMMING SAFE</h3>
            <p>
              Swimmer’s ear is a painful condition usually faced by swimmers
              when water gets trapped into the ear which results in the spread
              of bacteria.
            </p>
            <h3>TOO LOUD FOR TOO LONG IS WRONG</h3>
            <p>
              The tiny hair cells present in the ear can be easily damaged by
              repeated exposure to loud music and ultimately results in loss of
              hearing.
            </p>
          </div>
        )}
        {content == "GENERAL SURGEON" && (
          <div>
            <p>
              The practice of managing, preventing, treating and diagnosing all
              adult health conditions is termed as General Medicine. As the
              first point of contact, often general medicine department
              facilitates to direct patients to specialists if a medical
              condition needs advanced treatment or wherever required. Employing
              advanced diagnostic methods the severity and/or cause of a
              condition is ascertained before an individual can be referred to a
              specialist, if required.
            </p>
            <p>
              General medicine is the very basic requirement of any healthcare
              organization and its practitioners promote general disease
              prevention methods and champion a healthy society. The Department
              of General Medicine at Health plus clinic, Chennai offers a
              multi-disciplinary approach to provide a holistic and
              comprehensive management of diseases.
            </p>
            <p>
              The well-equipped labs and well-appointed wards with compassionate
              clinical personnel ensures that the patients receive the best
              healing atmosphere. The strong inter-professional team promotes a
              collaborative approach to problem-solving. The quality improvement
              team is finding new ways to provide best care to the patients for
              a healthy life.
            </p>
            <p>
              The range of diseases managed by the Department includes – general
              sickness to the management of chronic and complex diseases. Some
              of the services rendered at the Department are given as below:
            </p>
            <h3>Primary care, including routine check-ups</h3>
            <br />
            <ul>
              <li>Diabetes management</li>
              <li>Mental health assessment</li>
              <li>Education programs</li>
              <li>Blood pressure and related conditions</li>
              <li>Stomach pain, vomiting, diarrhea and jaundice</li>
              <li>
                Respiratory diseases like asthma, allergies, lung infection,
                cough, sinusitis, tuberculosis, and pneumonia
              </li>
            </ul>
            <br />
            <h3>TIPS FOR HEALTHY LIVING</h3>
            <br />
            <h3>EXERCISE REGULARLY</h3>
            <p>
              Staying active will always keep your heart healthy regardless of
              weight. Performing regular exercise reduces your risk of heart
              disease.
            </p>
            <h3>KICK-OUT THE BAD (LDL) CHOLESTEROL</h3>
            <p>
              Excess cholesterol gets deposited in the arteries obstructing the
              blood flow and increase the risk of heart failure or stroke. To
              keep your cholesterol at a healthy level, you must follow a
              healthy diet rich in good (HDL) cholesterol
            </p>
            <h3>QUIT SMOKING</h3>
            <p>
              It’s never too late to take a healthy action. Smoking cessation
              lets you breathe more easily and improves your quality of life and
              helps you live longer.
            </p>
            <h3>EAT HEALTHY</h3>
            <p>
              Eating a balanced diet provides various nutrients that keep your
              skin healthy. A diet including fruits, vegetables, low-fat
              products, low salt and added sugars not only keeps your skin
              healthy but also helps in maintaining a healthy weight.
            </p>
          </div>
        )}
        {content == "PEDIATRICIAN" && (
          <div>
            <p>
              Care of children in health and illness is an integral part of any
              health care service. Health plus clinic presents to you the well
              established Pediatric Department which provides quality treatment
              with tender loving care to the children suffering from various
              illnesses. With many years of experience in the field of child
              care, our team of doctors has always brought unfailing results.
            </p>
            <p>
              Health plus clinic provide high-quality, short stay and
              child-centric care for the children with common pediatric illness.
              With the vision of touching millions of lives, we would want to
              provide the best care possible.
            </p>
            <p>
              Consultant pediatricians discuss the condition with the parents as
              we encourage parental inputs and plan a personalized treatment or
              the child for his comfort. A lot of care is taken in providing a
              child-centric service.
            </p>
            <h3>List of services offered at Health plus clinic are:</h3>
            <ul>
              <li>Cardiology</li>
              <li>Juvenile diabetes</li>
              <li>Constipation</li>
              <li>Cold and flu</li>
              <li>Vomiting</li>
              <li>Urinary tract infection</li>
              <li>Infection</li>
              <li>Ear nose and throat infection</li>
            </ul>
            <h3>WAYS TO KEEP YOUR BABY HEALTHY</h3>
            <br />
            <h3>WATCH WHERE YOU TAKE YOUR BABY</h3>
            <p>
              Do not take your baby to crowded places and do not allow people to
              come over to touch or carry the baby without washing their hands.
            </p>
            <h3>DON’T STOP BREASTFEEDING</h3>
            <p>
              Breast milk is the ideal source of nutrition and protection for
              your young one. It is the source of protection against various
              illnesses.
            </p>
            <h3>VACCINATE</h3>
            <p>
              Make sure you take your baby to the hospital for regular
              vaccination. Do not skip any vaccination.
            </p>
            <h3>MAINTAIN BABY’S HYGIENE</h3>
            <p>
              Keep your baby clean, neat and tidy. Keep your baby away from
              smoky places. Baby’s hygiene is very important to prevent him/her
              from various infections.
            </p>
            <h3>AVOID DIRECT SUNLIGHT</h3>
            <p>
              The sun is most intense from 10 a.m. to 4 p.m. Dress up your baby
              with light weight clothes and protect him from the harmful rays of
              the sun.
            </p>
            <h3>LIMIT YOUR BABY’S EXPOSURE TO ILLNESS</h3>
            <p>
              Discourage touching your baby or her toys when someone is ill.
              When going out make sure the place is less crowded and more
              ventilated.
            </p>
          </div>
        )}
        {content == "PSYCHIATRISTS" && (
          <div>
            <p>
              There are times when our ability to cope with daily activities
              breaks down, we feel lonely and deserted. Fear, confusion and
              anger begin to develop. We will want a ray of hope to get us out
              of the dark. We understand this and our Psychiatry Department will
              help you overcome this condition.
            </p>
            <p>
              {" "}
              Gleneagles Global Hospitals presents to you the Department of
              Psychiatry with the best of doctors highly specialized in this
              field. Our team of doctors are trained and expertise from famous
              universities. We offer comprehensive evaluation, diagnosis and
              treatment to heal your mental illness.
            </p>
            <p>
              {" "}
              The hospital is well equipped with a good infrastructure and the
              team also provides counseling and personalized diet plan which
              will relax your brain muscles to carry out the treatment with
              ease. The wards are staffed with trained nurses who monitor the
              status of the patient and prepare a timely report and present it
              to the senior doctors who provide best of the treatments based on
              the patients’ condition.
            </p>
            <br></br>
            <p>
              {" "}
              The Psychiatry department at Gleneagles Global Hospitals includes
            </p>
            <ul>
              <li> Cognitive behavioral therapy.</li>
              <li>Women’s mental health.</li>
              <li>Bipolar disorder treatment.</li>
              <li>Community mental health.</li>
              <li>Treatment for depression and anxiety.</li>
              <li>Mental health issues in adults.</li>
            </ul>
            <p>
              {" "}
              We believe that health is holistic, our psychiatry department
              takes care of your mental health, the most neglected part.
            </p>
            <h3>TYPES OF PSYCHOTIC DISORDERS</h3>
            <h3>SCHIZOPHRENIA</h3>
            <p>
              Schizophrenia is a type of mental disorder that distorts the way a
              person thinks, talks, acts, and expresses emotions. It appears in
              the late adolescence or early adulthood. This disease is
              considered to be a life-long disease. Individuals with
              schizophrenia may hear voices that are not there. This is one of
              the symptoms of schizophrenia.
            </p>
            <h3>BIPOLAR ILLNESS</h3>
            <p>
              Bipolar illness is a type of mental disorder in which the symptoms
              relate more to mood disturbances. A person suffering from bipolar
              illness usually has elevations and depressions in his mood and
              this persists for a period of time or fluctuates in intensity.
            </p>
            <h3>DELUSIONAL DISORDER</h3>
            <p>
              Delusional disorder is a type of psychosis that consists of very
              strong and fixed beliefs in things that are not true. In this
              illness, changes in perception, such as hallucinations, are not
              seen. People with delusional disorder generally experience
              non-bizarre delusions, things that occur in real life such as
              being followed, poisoned, deceived, conspired against, or loved
              from a distance.
            </p>
            <h3>DRUG-INDUCED PSYCHOSIS</h3>
            <p>
              The use of drugs like cocaine, amphetamines and alcohol can cause
              psychotic symptoms to appear. Once the effects of the drugs or
              alcohol wear off, the symptoms of psychosis will usually resolve.
              The symptoms themselves require medical treatment. This psychosis
              can last up to a few days, and is often characterized by
              hallucinations, delusions, memory loss and confusion.
            </p>
          </div>
        )}
        {content == "PHYSIOTHERAPISTST" && <div></div>}
        {content == "OBSTETRICS" && (
          <div>
            <p>
              The Department of Obstetrics, Health plus clinic provides a full
              array of women’s health care in the field of reproductive
              sciences. The best care and service is provided from the pregnancy
              of the women, during childbirth to any complications related to
              the reproductive system post pregnancy.
            </p>
            <p>
              We have the best team of obstetricians in town. Doctors, surgeons,
              physicians, and nurses are all well trained and have experience in
              their field of work. The surgeons and doctors collaboratively
              discuss the medical status of the patient and plan the right and
              the best treatment to cure and heal the patients.
            </p>
            <p>
              Health plus clinic have a great infrastructure with the advanced
              machines used for the treatment of the patients. The staff and
              technicians are trained and are guided by the superior doctors.
              The patient’s medical status is timely monitored and appropriate
              treatment is provided when required.
            </p>
            <p>
              Health plus clinic have a great infrastructure with the advanced
              machines used for the treatment of the patients. The staff and
              technicians are trained and are guided by the superior doctors.
              The patient’s medical status is timely monitored and appropriate
              treatment is provided when required.
            </p>
            <p>
              A list of services are mentioned below which is offered by the
              Health Plus Clinic. They are:
            </p>
            <ul>
              <li>Pregnancy and childbirth</li>
              <li>Family planning</li>
              <li>Maternal fetal medicine</li>
              <li>Infertility treatment</li>
              <li>
                We provide you with the best team of surgeons, doctors,
                dieticians and physicians all under one roof.
              </li>
            </ul>
            <p>
              We care for you and for your child’s health, and make birthing a
              memorable experience.
            </p>
            <h3>HEALTHY PREGNANCY</h3>
            <h3>EAT HEALTHY</h3>
            <p>
              A pregnant woman may require about 300 additional calories per
              day. Therefore, increasing protein intake promotes a healthy
              growth of the fetus.
            </p>
            <h3>EXERCISE REGULARLY</h3>
            <p>
              Exercise is the great way to reduce stress during pregnancy. It
              prevents aches and pains and improves the sluggish blood
              circulation in the legs.
            </p>
            <h3>AVOID CAFFEINE</h3>
            <p>
              Caffeine prevents the absorption of iron in the body which is
              crucial during pregnancy. As it is a stimulant, it may cause
              headache and disturb sleep.
            </p>
            <h3>GET EARLY PRENATAL CARE</h3>
            <p>
              A good prenatal care is very important to the fetus. During
              prenatal care, a pregnant woman is screened for certain conditions
              that may lead to complications.
            </p>
            <h3>TAKE PRENATAL VITAMINS</h3>
            <p>
              Pre-natal supplements mostly consist of folic acid and iron. Folic
              acid reduces the risk of neural tube defects in the fetus.
            </p>
            <h3>CARE FOR YOUR EMOTIONAL HEALTH</h3>
            <p>
              Pregnancy can cause stress which can trigger the complications in
              the fetus. Therefore, opting for a counseling or consulting a
              specialist may have successful outcomes.
            </p>
          </div>
        )}
        {content == "GASTROENTEROLOGIST" && <div></div>}
        {content == "SURGICAL ONCOLOGIST" && <div></div>}
        {content == "GYNECOLOGY" && (
          <div>
            <p>
              Gynecology is a field of medicine that deals with the diseases and
              condition of the female reproductive system and sexual health. The
              Department of Gynecology at the Health plus clinic has the best
              gynecologists in country. Eminent faculty members from great
              institutions train them.
            </p>
            <p>
              A team of well experienced and trained doctors, surgeons,
              physicians and technicians are present in the department to
              provide good care and service to the patients. They provide
              world-class treatment and bring permanent healing to the patients
              suffering from gynecological problems.
            </p>
            <p>
              It is the dedication and commitment of the team of doctors that
              bring outstanding results. We at Health plus clinic aim at
              providing the best service for a quick and healthy recovery and
              improve health outcomes of women across the world.
            </p>
            <p>
              The range of diseases managed by the Department includes – general
              sickness to the management of chronic and complex diseases. Some
              of the services rendered at the Department are given as below:
            </p>
            <p>A number of treatments are mentioned below. They are:</p>
            <ul>
              <li>Preventive gynecological screenings</li>
              <li>Gynecological surgery</li>
              <li>Gynecological cancer care</li>
              <li>Osteoporosis screenings</li>
              <li>
                For women in need, the Department has advanced facilities for
                painless labor with continuous electronic fetal monitoring and
                supports all high-risk pregnancy cases that multi-specialty
                consultants. We are here to provide you with the ultimate
                treatment to give you a happy and a healthy life.
              </li>
            </ul>
            <h3>PRECAUTIONS TO BE TAKEN</h3>
            <br />
            <h3>MANAGE STRESS</h3>
            <p>
              Stress management is the need of the hour as stress is the main
              cause for a number of health problems. Indulge in physical
              activities and try relaxation techniques.
            </p>
            <h3>GET REGULAR HEALTH SCREENINGS</h3>
            <p>
              Regular health checkups will help you know the status of your
              health and will also look for diseases before the symptoms arise.
              It also helps in the early diagnosis and treatmen
            </p>
            <h3>VAGINAL HYGIENE IS ESSENTIAL</h3>
            <p>
              It is very important to take proper care of your private parts.
              Constant douching is not necessary as it increases vaginal
              infections.
            </p>
            <h3>LISTEN TO YOUR SIGNS</h3>
            <p>
              Pay attention to the signs, abnormal bleeding, vaginal discharge,
              odor, itching and pain may indicate the presence of infection such
              as vaginitis, or a sexually transmitted disease.
            </p>
          </div>
        )}
        {content == "EMERGENCY PHYSICIANS" && (
          <div>
            <p>
              In any emergency, time is very crucial. The care providers should
              know the value of time and should be well-experienced to take
              quick and right decisions. Any delay in time, or a simple mistake
              can cost the patients their life. Health Plus Clinic emergency
              medicine and trauma care facilities are one of the most advanced
              in India. They contain specialty care sections for accident &
              trauma, cardiac emergencies, and pediatrics emergencies. The
              department consists of professionals with specialized training and
              years of experience in dealing with medical emergency situation.
            </p>
            <p>
              The emergency medicine and trauma department include leading
              fellowship trained experts in emergency care and our
              subspecialists are available for consultations. The Centre is
              staffed with trauma physicians, emergency room physicians,
              surgical residents, and nurses – all in readiness to respond to
              any kind of medical emergencies.
            </p>
            <p>
              We are one of the largest emergency care departments with many
              years of experience in this field, treating thousands of patients
              each year. The emergency care wards are well furnished with latest
              technology machines to provide with the best of service and care
              to victims.
            </p>
            <h3>
              Division units add another level of service for the patients. They
              are:
            </h3>
            <br></br>
            <ul>
              <li>Rapid treatment unit</li>
              <li>Evaluation and treatment unit</li>
              <li>Decontamination unit</li>
              <li>
                Do not panic in case of any emergency condition, we are just a
                call away.
              </li>
            </ul>
            <h3>MERGENY UNIT – MEDICAL CONDITIONS</h3>
            <br />
            <h3>SPONTANEOUS ABORTION</h3>
            <p>
              It is a non-induced fetal death or passage of products of
              conception before 2 wks gestation. It is a medical emergency as
              vaginal bleeding occurs during this condition.
            </p>
            <h3>TRAUMATIC BRAIN INJURY</h3>
            <p>
              This condition involves temporary or permanent damage to the brain
              tissues. It is a result of a hard impact on the head or brain
              which is often associated with internal bleeding or swelling of
              the brain.
            </p>
            <h3>HEART ATTACK</h3>
            <p>
              Heart attack is a serious medical emergency in which the supply of
              blood to the heart is blocked usually due to a blood clot. The
              person experiences tightness and pain in the chest.
            </p>
            <h3>TRAUMA</h3>
            <p>
              Most of the traumas are caused by motor bike accidents or falls.
              Very rarely people are a victim to stabbing or shooting. Trauma
              may result in an assortment of injuries to various parts of the
              body.
            </p>
            <h3>RESPIRATORY FAILURE</h3>
            <p>
              When basic functions like, the bringing of oxygen and removal of
              carbon-di-oxide from the blood stream, are impaired, a
              life-threatening situation may occur.
            </p>
            <h3>BONE FRACTURES</h3>
            <p>
              Bone fracture is a medical emergency where in the continuity of
              the bone is broken due to high force impact or stress. The person
              undergoes immense pain and trauma.
            </p>
          </div>
        )}
        {content == "SPINE AND ORTHOPAEDIC CLINIC" && (
          <div>
            <p>
              Joint replacements have become very common, and provide an
              effective solution for painful joints that cannot be managed with
              conservative treatment. The Department of Orthopaedics & Spine
              Clinic at the Health plus clinic has a range of ingenious
              treatments, which cater to the needs of the patients, and aims at
              providing the best services and treatments possible. The
              Department has a team of orthopedic surgeons trained by a group of
              faculty members from renowned universities and hospitals.
            </p>
            <p>
              With comprehensive and joint care, health plus clinic helps in
              restoring your sense of mobility. The orthopedic team works in
              collaboration with the imaging department to help in accurate
              diagnosis and planning a customized treatment. We aim at quick
              recovery and a healthy living of our patients. Bringing together a
              team of highly qualified orthopaedic specialists to treat hip,
              knee and joint problems.
            </p>
            <h3>WAYS TO PROTECT YOUR JOINTS</h3>
            <br></br>
            <h3>INCREASE FLEXIBILITY</h3>
            <p>
              When a joint is stiff, it causes inflammation and weakens the
              muscles protecting the joints. Stretching is the best way to keep
              your body flexible and maintains motion around the joints.
            </p>
            <h3>GET YOUR NUTRITION IN CHECK</h3>
            <p>
              Maintain a healthy diet by avoiding saturated fats and processed
              foods. Minimizing excess body fat and inflammatory responses are
              ways to ensure healthy muscles and joints.
            </p>
            <h3>WEAR THE RIGHT SHOES</h3>
            <p>
              Choosing the right shoes for your legs is very important as it
              provides cushioning, stability and comfort while walking. It’s
              time to replace your worn out shoes and find the right one.
            </p>
            <h3>MAINTAIN PROPER POSTURE</h3>
            <p>
              Staring at the computer screen for too long can cause eyestrain,
              blurry vision, dry eyes, headaches, neck, back and shoulder pain.
            </p>
            <h3>LISTEN TO YOUR JOINTS</h3>
            <p>
              Avoid being overactive and know when to stop a certain movement.
              Sometimes, “no pain, no gain” can lead to problems if not
              addressed early. So, do not strain your joints.
            </p>
            <h3>WATCH YOUR WEIGHT</h3>
            <p>
              Keeping your weight within a healthy range is the best thing you
              can do for your joints. Exercise regularly and maintain your
              weight to reduce the pressure on your knees, hips and back.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpecialDetail;
