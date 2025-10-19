import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyAlternateText
 */
export class HaleyAlternateText extends VITAL_Node {
  public richText?: boolean;
  public haleyLanguageType?: string;
  public alternateDescription?: string;
  public alternateLongDescription?: string;
  public haleyAlternateTextType?: string;
  public alternateText?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyAlternateText';
  }

  /**
   * Get property definitions for HaleyAlternateText
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isRichText',
        tsPropertyName: 'richText',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyLanguageType',
        tsPropertyName: 'haleyLanguageType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAlternateDescription',
        tsPropertyName: 'alternateDescription',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAlternateLongDescription',
        tsPropertyName: 'alternateLongDescription',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAlternateTextType',
        tsPropertyName: 'haleyAlternateTextType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAlternateText',
        tsPropertyName: 'alternateText',
        type: 'string',
        required: false
      }
    ];
  }


}
