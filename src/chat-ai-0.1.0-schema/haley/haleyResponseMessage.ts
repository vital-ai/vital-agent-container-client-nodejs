import { HaleyMessage } from '../vital-aimp/haleyMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyResponseMessage
 */
export class HaleyResponseMessage extends HaleyMessage {
  public commandProcessorReceivedDateTime?: string | Date;
  public processorCommandEndDateTime?: string | Date;
  public haleyStatusTypeURI?: string;
  public commandProcessorEndDateTime?: string | Date;
  public commandStartDateTime?: string | Date;
  public haleyChatCommandInputKey?: string;
  public haleyProgressPercentage?: number;
  public processorCommandConsumerPartition?: string;
  public processorCommandConsumerID?: string;
  public commandChildSentDateTime?: string | Date;
  public processorCommandReceivedDateTime?: string | Date;
  public haleyAccessViolationTypeURI?: string;
  public commandSentDateTime?: string | Date;
  public processorCommandConsumerPartitionAssignmentList?: string;
  public haleyProgressUnitTypeURI?: string;
  public processorCommandSentDateTime?: string | Date;
  public commandChildEndDateTime?: string | Date;
  public haleyProgressAmount?: number;
  public commandChildReceivedDateTime?: string | Date;
  public commandEndDateTime?: string | Date;
  public haleyResponseTypeURI?: string;
  public haleyStatusMessage?: string;
  public haleyAccessViolationDescription?: string;
  public commandProcessorSentDateTime?: string | Date;
  public commandReceivedDateTime?: string | Date;
  public haleyProgressStatusTypeURI?: string;
  public affectedResourceCount?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyResponseMessage';
  }

  /**
   * Get property definitions for HaleyResponseMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasCommandProcessorReceivedDateTime',
        tsPropertyName: 'commandProcessorReceivedDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasProcessorCommandEndDateTime',
        tsPropertyName: 'processorCommandEndDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasHaleyStatusTypeURI',
        tsPropertyName: 'haleyStatusTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasCommandProcessorEndDateTime',
        tsPropertyName: 'commandProcessorEndDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasCommandStartDateTime',
        tsPropertyName: 'commandStartDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatCommandInputKey',
        tsPropertyName: 'haleyChatCommandInputKey',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyProgressPercentage',
        tsPropertyName: 'haleyProgressPercentage',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasProcessorCommandConsumerPartition',
        tsPropertyName: 'processorCommandConsumerPartition',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasProcessorCommandConsumerID',
        tsPropertyName: 'processorCommandConsumerID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasCommandChildSentDateTime',
        tsPropertyName: 'commandChildSentDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasProcessorCommandReceivedDateTime',
        tsPropertyName: 'processorCommandReceivedDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyAccessViolationTypeURI',
        tsPropertyName: 'haleyAccessViolationTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasCommandSentDateTime',
        tsPropertyName: 'commandSentDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasProcessorCommandConsumerPartitionAssignmentList',
        tsPropertyName: 'processorCommandConsumerPartitionAssignmentList',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyProgressUnitTypeURI',
        tsPropertyName: 'haleyProgressUnitTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasProcessorCommandSentDateTime',
        tsPropertyName: 'processorCommandSentDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasCommandChildEndDateTime',
        tsPropertyName: 'commandChildEndDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyProgressAmount',
        tsPropertyName: 'haleyProgressAmount',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasCommandChildReceivedDateTime',
        tsPropertyName: 'commandChildReceivedDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasCommandEndDateTime',
        tsPropertyName: 'commandEndDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyResponseTypeURI',
        tsPropertyName: 'haleyResponseTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasHaleyStatusMessage',
        tsPropertyName: 'haleyStatusMessage',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyAccessViolationDescription',
        tsPropertyName: 'haleyAccessViolationDescription',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasCommandProcessorSentDateTime',
        tsPropertyName: 'commandProcessorSentDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasCommandReceivedDateTime',
        tsPropertyName: 'commandReceivedDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyProgressStatusTypeURI',
        tsPropertyName: 'haleyProgressStatusTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAffectedResourceCount',
        tsPropertyName: 'affectedResourceCount',
        type: 'number',
        required: false
      }
    ];
  }


}
