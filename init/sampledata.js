const samplelisting = [
    {
        title: "Sunset Serenity",
        artist: "John Doe",
        description: "A stunning depiction of a serene sunset.",
        image: "https://images.unsplash.com/photo-1719937051124-91c677bc58fc?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Art"
    },
    {
        title: "Mountain Majesty",
        artist: "Jane Smith",
        description: "A beautiful artwork capturing mountain landscapes.",
        image: "https://plus.unsplash.com/premium_photo-1730828574071-eae47eb75061?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
        category: "Art"
    },
    {
        title: "Ocean Bliss",
        artist: "Sarah Johnson",
        description: "An exquisite illustration of ocean waves.",
        image: "https://images.unsplash.com/photo-1732024000259-b372b1e1a012?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
        category: "Art"
    },
    {
        title: "Abstract Dreams",
        artist: "Emily Brown",
        description: "A creative abstract art piece.",
        image: "https://images.unsplash.com/photo-1731935923419-53a7994520be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
        category: "Art"
    },
    {
        title: "City Lights",
        artist: "Michael Green",
        description: "The vibrant energy of city life captured in art.",
        image: "https://images.unsplash.com/photo-1731437519637-747bb78a0217?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
        category: "Art"
    },
    {
        title: "Forest Whisper",
        artist: "Anna White",
        description: "The quiet mystery of the forest.",
        image: "https://images.unsplash.com/photo-1732192548673-e08daf9595cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D",
        category: "Art"
    },
    {
        title: "Golden Meadows",
        artist: "Robert Black",
        description: "Fields of golden wheat under a radiant sky.",
        image: "https://images.unsplash.com/photo-1732287932412-6bd1916b19cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",
        category: "Art"
    },
    {
        title: "Vintage Charm",
        artist: "Sophia Brown",
        description: "A nostalgic piece inspired by vintage aesthetics.",
        image: "https://images.unsplash.com/photo-1719937206220-f7c76cc23d78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D",
        category: "Art"
    },
    {
        title: "Cosmic Dance",
        artist: "Chris Grey",
        description: "An artistic interpretation of cosmic phenomena.",
        image: "https://images.unsplash.com/photo-1732321221818-3bb8fdd9052d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D",
        category: "Art"
    },
    {
        title: "Desert Mirage",
        artist: "Linda Wilson",
        description: "https://images.unsplash.com/photo-1732321221818-3bb8fdd9052d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D",
        category: "Art"
    },
    {
        title: "Winter Wonderland",
        artist: "William Blue",
        description: "A tranquil scene of snowy landscapes.",
        image: "https://images.unsplash.com/photo-1732321221818-3bb8fdd9052d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D",
        category: "Art"
    },
    {
        title: "Autumn Elegance",
        artist: "Laura Pink",
        description: "The warm tones of autumn in an artistic expression.",
        image: "https://images.unsplash.com/photo-1732321221818-3bb8fdd9052d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D",
        category: "Art"
    },
    {
        title: "Spring Awakening",
        artist: "Paul Red",
        description: "The vibrancy of spring blossoms.",
        image: "https://images.unsplash.com/photo-1732321221818-3bb8fdd9052d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D",
        category: "Art"
    },
    {
        title: "Urban Jungle",
        artist: "George Yellow",
        description: "The blend of nature and urban life.",
        image: "https://images.unsplash.com/photo-1732321221818-3bb8fdd9052d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D",
        category: "Art"
    },
    {
        title: "Ethereal Waters",
        artist: "Claire Violet",
        description: "A mesmerizing view of ethereal water bodies.",
        image: "https://images.unsplash.com/photo-1732321221818-3bb8fdd9052d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D",
        category: "Art"
    }
];

module.exports ={data:samplelisting};