import { KGTypeRestriction } from './kgtypeRestriction';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGRelationTypeRestriction
 */
export class KGRelationTypeRestriction extends KGTypeRestriction {
  public destinationRelationTypeRestrictionURI?: string;
  public kGRelationTypeURI?: string;
  public kGRelationTypeDestinationOpen?: boolean;
  public kGRelationTypeExpandSource?: boolean;
  public kGRelationTypeExpandDestination?: boolean;
  public kGRelationTypeSourceOpen?: boolean;
  public sourceRelationTypeRestrictionURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGRelationTypeRestriction';
  }

  /**
   * Get property definitions for KGRelationTypeRestriction
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasDestinationRelationTypeRestrictionURI',
        tsPropertyName: 'destinationRelationTypeRestrictionURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRelationTypeURI',
        tsPropertyName: 'kGRelationTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#isKGRelationTypeDestinationOpen',
        tsPropertyName: 'kGRelationTypeDestinationOpen',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#isKGRelationTypeExpandSource',
        tsPropertyName: 'kGRelationTypeExpandSource',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#isKGRelationTypeExpandDestination',
        tsPropertyName: 'kGRelationTypeExpandDestination',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#isKGRelationTypeSourceOpen',
        tsPropertyName: 'kGRelationTypeSourceOpen',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasSourceRelationTypeRestrictionURI',
        tsPropertyName: 'sourceRelationTypeRestrictionURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
