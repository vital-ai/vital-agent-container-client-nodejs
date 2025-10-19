import { KGNode } from './kgnode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGFlag
 */
export class KGFlag extends KGNode {
  public kGFlagReasonURI?: string;
  public kGFlagDescription?: string;
  public kGFlagSourceURI?: string;
  public kGFlagDateTime?: string | Date;
  public kGFlagType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGFlag';
  }

  /**
   * Get property definitions for KGFlag
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGFlagReasonURI',
        tsPropertyName: 'kGFlagReasonURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGFlagDescription',
        tsPropertyName: 'kGFlagDescription',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGFlagSourceURI',
        tsPropertyName: 'kGFlagSourceURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGFlagDateTime',
        tsPropertyName: 'kGFlagDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGFlagType',
        tsPropertyName: 'kGFlagType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
