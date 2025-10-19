import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGUserContext
 */
export class KGUserContext extends VITAL_Node {
  public kGUserContextExperienceLevel?: string;
  public kGUserContextPronoun?: string;
  public kGUserContextLoginURI?: string;
  public kGUserContextMood?: string;
  public kGUserContextLocation?: string;
  public kGUserContextName?: string;
  public kGUserContextAgentTone?: string;
  public kGUserContextCurrentTimezone?: string;
  public kGUserContextAccountLevel?: string;
  public kGUserContextSoundLevel?: number;
  public kGUserContextAccountURI?: string;
  public kGUserContextLightLevel?: number;
  public kGUserContextAgentFamiliarity?: string;
  public kGPlaceURI?: string;
  public kGUserContextGender?: string;
  public kGUserContextCurrentDateTime?: string | Date;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGUserContext';
  }

  /**
   * Get property definitions for KGUserContext
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGUserContextExperienceLevel',
        tsPropertyName: 'kGUserContextExperienceLevel',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGUserContextPronoun',
        tsPropertyName: 'kGUserContextPronoun',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGUserContextLoginURI',
        tsPropertyName: 'kGUserContextLoginURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGUserContextMood',
        tsPropertyName: 'kGUserContextMood',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGUserContextLocation',
        tsPropertyName: 'kGUserContextLocation',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGUserContextName',
        tsPropertyName: 'kGUserContextName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGUserContextAgentTone',
        tsPropertyName: 'kGUserContextAgentTone',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGUserContextCurrentTimezone',
        tsPropertyName: 'kGUserContextCurrentTimezone',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGUserContextAccountLevel',
        tsPropertyName: 'kGUserContextAccountLevel',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGUserContextSoundLevel',
        tsPropertyName: 'kGUserContextSoundLevel',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGUserContextAccountURI',
        tsPropertyName: 'kGUserContextAccountURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGUserContextLightLevel',
        tsPropertyName: 'kGUserContextLightLevel',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGUserContextAgentFamiliarity',
        tsPropertyName: 'kGUserContextAgentFamiliarity',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGPlaceURI',
        tsPropertyName: 'kGPlaceURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGUserContextGender',
        tsPropertyName: 'kGUserContextGender',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGUserContextCurrentDateTime',
        tsPropertyName: 'kGUserContextCurrentDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      }
    ];
  }


}
