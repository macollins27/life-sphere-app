export interface Section {
  id: string;
  title: string;
  content: string;
}

export interface Chapter {
  id: string;
  number?: number;
  title: string;
  intro?: string;
  sections?: Section[];
  content?: string;
}

export interface Handbook {
  title: string;
  subtitle: string;
  author: string;
  chapters: Chapter[];
}

export const handbook: Handbook = {
  title: "Life Sphere Handbook",
  subtitle: "A Comprehensive Guide to Well-Being",
  author: "Maxwell Collins",
  chapters: [
    {
      id: "introduction",
      title: "Introduction",
      content: `Welcome to Life-Sphere! This handbook is designed to guide you on your journey towards well-being, encompassing physical, mental, and spiritual health. By integrating techniques from highly reviewed self-improvement books and personal experiences, I've created a comprehensive guide to help you live a balanced, fulfilling life.

To begin the journey of a lifestyle change, you must first recognize that change is necessary. Your current habits and ways of thinking must be modified to allow yourself to become the person you want to be. Accepting change is the first step to embarking upon this journey – of feeling great day in and day out. Wake up feeling great and go to sleep feeling great, sounds great right?

Realizing that your health is the most important aspect of your life will aid in your daily motivation and push you away from your old habits. Everything you do should center around the idea of "Is this healthy?" This includes the food you eat, the items you put on your skin, the air you breathe, the water you drink/bathe in, the actions you take throughout the day, the way you treat people, and the thoughts in your head. If what you do is not healthy, your immediate reaction should be, "Why am I doing this?" If the reason is sound and does not happen often, allow yourself this, but know it should not happen again. If the reason is not sound, you should not perform the action and if you do, try your hardest to cut it back to a minimum.

This mindset of change and health is key to understanding how you will follow a regimented workout and diet plan to implement a healthy lifestyle. Without understanding these concepts, you will never understand the underlying reason to be healthy, and without this, the lifestyle will never last. True motivation comes when you realize that being healthier will make you feel better in the long term. When you eat unhealthy foods, it might taste great in the moment, but soon after, you may feel sluggish and regretful. On the other hand, choosing healthier options will leave you feeling energized and satisfied without the downsides.`,
    },
    {
      id: "physical-well-being",
      number: 1,
      title: "Physical Well-Being",
      intro: `Physical well-being encompasses all aspects of maintaining a healthy body through proper sleep, nutrition, exercise, and daily habits. It involves understanding and implementing practices that ensure your body is functioning at its best. This chapter will guide you through the basics of building a routine that includes sufficient rest, regular physical activity, and a balanced diet, while also touching on the importance of stretching and deep breathing exercises.

Focusing on physical well-being is crucial because your body is the vessel through which you experience life. By taking care of it, you enhance your ability to perform daily activities, reduce the risk of chronic diseases, and improve your overall quality of life. Good physical health provides the energy and strength needed to pursue your goals and enjoy your passions. Moreover, physical well-being significantly impacts your mental and emotional health, creating a foundation for a balanced and fulfilling life.`,
      sections: [
        {
          id: "sleep",
          title: "Sleep",
          content: `Quality sleep is crucial for overall health and well-being. Without proper sleep, it is difficult for the brain and body to function optimally. Aim to wake up and go to bed at the same time every day, ideally within 2-3 hours of sunset. This consistency helps regulate your body's internal clock. Avoid eating a meal within three hours of bedtime, as a busy digestive system can interfere with your ability to fall asleep.

To enhance your sleep quality, establish a relaxing bedtime routine that might include reading or practicing breathing exercises. Ensure your sleep environment is comfortable, with a supportive mattress and pillows, and consider using sleep aids like nose expanders for better airflow or supplements like vitamin D and magnesium if needed.`,
        },
        {
          id: "stretching-and-deep-breathing",
          title: "Stretching and Deep Breathing",
          content: `Stretching and deep breathing exercises are essential for releasing tension that builds up in the body from sleeping and sitting. When you stretch, take deep breaths and exhale as you stretch further, which helps your muscles release more tension. This practice also opens up the diaphragm and releases stale air trapped in the lungs, promoting better oxygen flow and relaxation.`,
        },
        {
          id: "exercise",
          title: "Exercise",
          content: `Regular physical activity is vital for maintaining a healthy body and mind. Incorporate a mix of cardiovascular exercises, strength training, and flexibility exercises into your routine. For weight loss, prioritize weight lifting over cardio, unless you're doing high-intensity interval training (HIIT) like sprints. Weight lifting builds muscle and boosts metabolism, while calisthenics and bodyweight exercises are excellent for overall fitness. Find activities you enjoy to keep you motivated and engaged.`,
        },
        {
          id: "nutrition",
          title: "Nutrition",
          content: `What you put into your body directly affects how you feel both mentally and physically. Eat a balanced diet rich in natural, nutrient-dense foods and avoid processed foods. Nutrient-dense foods help your body function optimally and regulate weight. Track your calorie intake and ensure it aligns with your goals. For instance, if you aim to lose weight, consume fewer calories than you burn. Use online resources to estimate the nutritional content of your meals and make informed choices.`,
        },
      ],
    },
    {
      id: "mental-well-being",
      number: 2,
      title: "Mental Well-Being",
      intro: `Mental well-being involves the maintenance of a healthy and balanced mind through practices like mindfulness, stress management, and goal setting. This chapter will introduce you to techniques for managing stress, practicing mindfulness and meditation, and setting realistic, achievable goals. These practices are designed to help you achieve a state of mental clarity and emotional stability, which are essential for navigating life's challenges.

Mental well-being is essential because it affects how we think, feel, and act. It influences our ability to handle stress, relate to others, and make decisions. When you prioritize your mental health, you are better equipped to manage stress and negative emotions, leading to a more positive and productive life. Additionally, cultivating mental well-being can improve your relationships, increase your resilience, and enhance your overall sense of happiness and fulfillment.`,
      sections: [
        {
          id: "mindfulness-and-meditation",
          title: "Mindfulness and Meditation",
          content: `Practicing mindfulness and meditation can significantly improve mental well-being by reducing stress, enhancing focus, and promoting emotional balance. Mindfulness involves paying attention to the present moment without judgment, which can be incorporated into daily activities like eating, walking, or even doing chores. For example, mindful eating involves savoring each bite, noticing the flavors and textures, and being fully present during the meal.

Meditation techniques, such as focusing on your breath or using guided meditations, can help you develop a deeper sense of inner peace and clarity. Starting with just five to ten minutes of meditation daily can make a noticeable difference in your stress levels and overall mental state. Over time, you can gradually increase the duration as you become more comfortable with the practice.`,
        },
        {
          id: "stress-management",
          title: "Stress Management",
          content: `Identifying and managing stressors is crucial for maintaining mental health. Keeping a journal to track stress triggers can help you understand what causes your stress and develop strategies to manage it. For example, if you notice that certain work tasks consistently cause stress, you can explore ways to streamline those tasks or seek support from colleagues.

Relaxation techniques like deep breathing exercises and progressive muscle relaxation can help you manage stress in the moment. Practicing deep breathing involves taking slow, deep breaths to calm your mind and body, while progressive muscle relaxation involves tensing and relaxing different muscle groups to release physical tension. These techniques can be especially helpful during stressful situations, such as before a big presentation or after a long day at work.`,
        },
        {
          id: "goal-setting",
          title: "Goal Setting",
          content: `Setting and achieving goals can provide a sense of purpose and direction, which is essential for mental well-being. Using the SMART criteria—specific, measurable, achievable, relevant, and time-bound—can help you create effective and attainable goals. For example, instead of setting a vague goal like "exercise more," a SMART goal would be "go for a 30-minute walk three times a week."

Breaking goals into smaller, manageable steps makes them less overwhelming and more achievable. Tracking your progress and celebrating your achievements, no matter how small, can keep you motivated and reinforce positive behaviors. For instance, if your goal is to read more, you could start with reading one chapter a day and gradually increase it as you develop the habit.`,
        },
      ],
    },
    {
      id: "spiritual-well-being",
      number: 3,
      title: "Spiritual Well-Being",
      intro: `Spiritual well-being refers to the sense of purpose and meaning in life, as well as the connection to something greater than oneself. This chapter explores ways to find and nurture your sense of purpose, practice gratitude, and connect with nature. These practices are designed to help you align your actions with your values and foster a deeper sense of peace and contentment.

Spiritual well-being is important because it provides a sense of direction and purpose in life. It helps you to understand and appreciate your place in the world, which can lead to greater inner peace and satisfaction. Engaging in spiritual practices can also improve your emotional resilience, helping you to cope with life's challenges and stresses more effectively. Moreover, a strong sense of spirituality can enhance your relationships and foster a sense of community and connectedness.`,
      sections: [
        {
          id: "finding-purpose",
          title: "Finding Purpose",
          content: `Discovering your purpose can bring a profound sense of fulfillment and direction to your life. Self-reflection is a powerful tool for identifying what gives your life meaning and aligning your actions with your values and passions. For example, if helping others brings you joy, you might find purpose in volunteering or pursuing a career in a helping profession.

Engaging in activities that align with your values, such as spending time with loved ones, pursuing creative projects, or contributing to your community, can enhance your sense of purpose. Volunteering and service are particularly impactful, as they not only benefit others but also foster a sense of connection and meaning. For instance, volunteering at a local shelter or participating in community clean-up events can provide a sense of accomplishment and fulfillment.`,
        },
        {
          id: "gratitude-practice",
          title: "Gratitude Practice",
          content: `Practicing gratitude can significantly improve your overall happiness and well-being. Writing down three things you're grateful for each day helps shift your focus from negative to positive aspects of your life. This simple practice can enhance your mood, increase your resilience, and promote a more optimistic outlook.

Expressing gratitude to others, whether through words or actions, strengthens relationships and fosters a sense of community. For example, writing a thank-you note to a friend or expressing appreciation to a colleague can deepen your connections and create a positive ripple effect in your interactions.`,
        },
        {
          id: "connection-with-nature",
          title: "Connection with Nature",
          content: `Spending time in nature can have profound benefits for your mental, physical, and spiritual well-being. Nature provides a sense of calm and perspective, helping to reduce stress and promote relaxation. Whether it's a walk in the park, hiking in the mountains, or simply sitting in a garden, connecting with the natural world can rejuvenate your spirit and enhance your overall sense of well-being.

Make it a habit to spend time outdoors regularly. Even brief moments in nature—like taking your lunch outside or walking barefoot on grass—can help you feel more grounded and connected. Pay attention to the sights, sounds, and smells around you, practicing mindfulness as you immerse yourself in the natural environment.`,
        },
      ],
    },
    {
      id: "personal-growth-and-development",
      number: 4,
      title: "Personal Growth and Development",
      intro: `Personal growth and development involve continuous learning, self-improvement, and the pursuit of new skills and knowledge. This chapter covers the importance of lifelong learning, journaling, and regular goal check-ins. It emphasizes the value of constantly evolving and striving to be the best version of yourself, both personally and professionally.

Prioritizing personal growth and development is crucial because it keeps your mind active and engaged, making you more adaptable to change. It fosters a sense of accomplishment and boosts your confidence as you master new skills and achieve your goals. Continuous self-improvement also enhances your problem-solving abilities and creativity, opening up new opportunities and enriching your life. Ultimately, investing in your personal growth helps you to live a more purposeful and fulfilling life.`,
      sections: [
        {
          id: "lifelong-learning",
          title: "Lifelong Learning",
          content: `Embracing lifelong learning is essential for personal growth and development. Continuously acquiring new skills and knowledge keeps your mind sharp and adaptable. Reading books, taking online courses, and attending workshops are excellent ways to learn new things and stay updated in your field. For example, reading a book on a topic you're passionate about can provide new insights and inspire you to take action.

Learning new skills can also boost your confidence and open new opportunities. Whether it's picking up a new hobby like playing a musical instrument or improving your professional skills, the process of learning and mastering something new is rewarding and fulfilling.`,
        },
        {
          id: "journaling",
          title: "Journaling",
          content: `Journaling is a powerful tool for self-reflection and personal growth. Writing down your thoughts, feelings, and experiences helps you process emotions, gain clarity, and track your progress over time. For instance, keeping a gratitude journal can help you focus on the positive aspects of your life, while a goal journal can help you stay on track with your aspirations.

Regular journaling can also help you identify patterns in your behavior and thought processes, allowing you to make informed decisions and adjustments. Setting aside a few minutes each day for journaling can have a profound impact on your mental and emotional well-being.`,
        },
        {
          id: "regular-check-ins-on-goals",
          title: "Regular Check-Ins on Goals",
          content: `Regularly reviewing and adjusting your goals ensures that you stay aligned with your values and priorities. Schedule regular check-ins, such as monthly or quarterly reviews, to assess your progress and make necessary adjustments. For example, if you set a goal to exercise three times a week but find it challenging to maintain, you might adjust the goal to twice a week and gradually increase it as you build the habit.

These check-ins also provide an opportunity to celebrate your achievements and reflect on what you've learned. Celebrating your progress, no matter how small, reinforces positive behaviors and keeps you motivated. During these reviews, consider what strategies worked well and what challenges you faced, and use this information to refine your approach moving forward.`,
        },
      ],
    },
    {
      id: "networking-and-building-relationships",
      number: 5,
      title: "Networking and Building Relationships",
      intro: `Networking and building relationships involve creating and maintaining meaningful connections with others. This chapter highlights the importance of social interactions, effective communication, and building a supportive community. It provides strategies for expanding your network, fostering strong relationships, and leveraging these connections for personal and professional growth.

Building strong relationships and a robust network is vital because humans are inherently social beings. Having a supportive community enhances your emotional well-being and provides a sense of belonging and security. Good relationships can offer support during tough times, provide new perspectives, and create opportunities for growth and collaboration. Additionally, effective networking can lead to career advancement and personal enrichment, making it an essential component of a well-rounded and successful life.`,
      sections: [
        {
          id: "effective-communication",
          title: "Effective Communication",
          content: `Effective communication is the foundation of healthy relationships. Active listening, which involves listening without interrupting and showing empathy, helps build trust and understanding. For example, when a friend shares a concern, focusing entirely on their words and responding with empathy can strengthen your bond.

Expressing yourself clearly and respectfully, using "I" statements to convey your feelings without blaming others, is essential for resolving conflicts and maintaining healthy relationships. For instance, saying "I feel overwhelmed when I'm not included in decisions" is more constructive than "You never include me in decisions."`,
        },
        {
          id: "boundaries",
          title: "Boundaries",
          content: `Setting and maintaining healthy boundaries is crucial for protecting your well-being and fostering respectful relationships. Identifying your limits and communicating them clearly helps prevent burnout and resentment. For example, if you need time for yourself after work, letting your family know that you need 30 minutes of alone time before engaging in family activities can help you recharge.

Respecting others' boundaries is equally important, as it shows that you value their needs and well-being. Maintaining consistency in enforcing your boundaries and revisiting them as needed ensures that your relationships remain balanced and healthy.`,
        },
        {
          id: "building-support-networks",
          title: "Building Support Networks",
          content: `Having a strong support network of positive, supportive people can significantly enhance your well-being. Surrounding yourself with individuals who uplift and inspire you creates a nurturing environment for personal growth. For instance, joining a local club or community group related to your interests can help you connect with like-minded individuals and build meaningful relationships.

Nurturing your relationships by spending quality time with loved ones, showing appreciation, and offering support strengthens your support network and fosters a sense of belonging. Regularly reaching out to friends and family, even with simple gestures like a phone call or a thoughtful message, helps maintain and deepen your connections.`,
        },
      ],
    },
    {
      id: "conclusion",
      title: "Conclusion",
      content: `Embarking on a journey towards holistic well-being requires commitment, self-awareness, and a willingness to embrace change. By integrating the principles and techniques outlined in this handbook into your daily life, you can achieve a balanced and fulfilling lifestyle. Remember, the key to success is consistency and patience. Small, incremental changes can lead to significant improvements over time.

At Life-Sphere, we believe that prioritizing your health, well-being, and personal growth is the foundation for a happy and meaningful life. Use this handbook as a guide and reference as you navigate your path to holistic well-being. Trust in yourself and the process, and know that you have the tools and support you need to succeed.`,
    },
    {
      id: "references",
      title: "References",
      content: `This handbook incorporates insights and techniques from the following highly reviewed self-improvement books:

1. **Atomic Habits** by James Clear
2. **The Power of Now** by Eckhart Tolle
3. **The 7 Habits of Highly Effective People** by Stephen R. Covey
4. **How to Win Friends and Influence People** by Dale Carnegie
5. **Mindfulness in Plain English** by Bhante Henepola Gunaratana
6. **The Miracle Morning** by Hal Elrod

Use these resources to deepen your understanding and continue your journey towards holistic well-being. Remember, the journey is ongoing, and each step you take brings you closer to your goals.`,
    },
  ],
};

export const getChapterById = (id: string): Chapter | undefined => {
  return handbook.chapters.find((chapter) => chapter.id === id);
};

export const getAllChapterIds = (): string[] => {
  return handbook.chapters.map((chapter) => chapter.id);
};

export const getTableOfContents = () => {
  return handbook.chapters.map((chapter) => ({
    id: chapter.id,
    number: chapter.number,
    title: chapter.title,
    sections: chapter.sections?.map((section) => ({
      id: section.id,
      title: section.title,
    })),
  }));
};
