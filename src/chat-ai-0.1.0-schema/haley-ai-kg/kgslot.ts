import { KGNode } from './kgnode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGSlot
 */
export class KGSlot extends KGNode {
  public kGParticipationType?: string;
  public kGSlotReferenceURI?: string;
  public slotSequence?: number;
  public kGExpressionType?: string;
  public kGSlotTypeDescription?: string;
  public kGSlotType?: string;
  public kGSlotConstraintType?: string;
  public frameGraphURI?: string;
  public kGSlotValueType?: string;
  public kGBeliefModeType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGSlot';
  }

  /**
   * Get property definitions for KGSlot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGParticipationType',
        tsPropertyName: 'kGParticipationType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGSlotReferenceURI',
        tsPropertyName: 'kGSlotReferenceURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasSlotSequence',
        tsPropertyName: 'slotSequence',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGExpressionType',
        tsPropertyName: 'kGExpressionType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGSlotTypeDescription',
        tsPropertyName: 'kGSlotTypeDescription',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGSlotType',
        tsPropertyName: 'kGSlotType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGSlotConstraintType',
        tsPropertyName: 'kGSlotConstraintType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasFrameGraphURI',
        tsPropertyName: 'frameGraphURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGSlotValueType',
        tsPropertyName: 'kGSlotValueType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGBeliefModeType',
        tsPropertyName: 'kGBeliefModeType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
