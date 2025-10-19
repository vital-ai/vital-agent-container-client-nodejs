import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGDescriptor
 */
export class KGDescriptor extends VITAL_Node {
  public kGDescriptorLabel?: string;
  public kGDescriptorLanguageURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGDescriptor';
  }

  /**
   * Get property definitions for KGDescriptor
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGDescriptorLabel',
        tsPropertyName: 'kGDescriptorLabel',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGDescriptorLanguageURI',
        tsPropertyName: 'kGDescriptorLanguageURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
