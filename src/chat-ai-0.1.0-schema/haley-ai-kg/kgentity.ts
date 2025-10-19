import { KGNode } from './kgnode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGEntity
 */
export class KGEntity extends KGNode {
  public kGEntityType?: string;
  public kGFormType?: string;
  public kGEntityLoginURI?: string;
  public kGEntityAccountURI?: string;
  public kGTypeMethodURI?: string;
  public kGProvenanceType?: string;
  public kGEntityTypeDescription?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGEntity';
  }

  /**
   * Get property definitions for KGEntity
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGEntityType',
        tsPropertyName: 'kGEntityType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGFormType',
        tsPropertyName: 'kGFormType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGEntityLoginURI',
        tsPropertyName: 'kGEntityLoginURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGEntityAccountURI',
        tsPropertyName: 'kGEntityAccountURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGTypeMethodURI',
        tsPropertyName: 'kGTypeMethodURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGProvenanceType',
        tsPropertyName: 'kGProvenanceType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGEntityTypeDescription',
        tsPropertyName: 'kGEntityTypeDescription',
        type: 'string',
        required: false
      }
    ];
  }


}
