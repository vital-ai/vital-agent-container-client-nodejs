import { UserCommandMessage } from '../vital-aimp/userCommandMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyRequestMessage
 */
export class HaleyRequestMessage extends UserCommandMessage {
  public commandProcessorReceivedDateTime?: string | Date;
  public processorCommandEndDateTime?: string | Date;
  public commandProcessorEndDateTime?: string | Date;
  public commandStartDateTime?: string | Date;
  public haleyChatCommandInputKey?: string;
  public processorCommandConsumerPartition?: string;
  public processorCommandConsumerID?: string;
  public haleyResponseQueuePreferenceURI?: string;
  public commandChildSentDateTime?: string | Date;
  public processorCommandReceivedDateTime?: string | Date;
  public commandSentDateTime?: string | Date;
  public processorCommandConsumerPartitionAssignmentList?: string;
  public haleyChatCommandModeURI?: string;
  public processorCommandSentDateTime?: string | Date;
  public commandChildEndDateTime?: string | Date;
  public commandChildReceivedDateTime?: string | Date;
  public haleyChatModelTemperature?: number;
  public haleyChatTestModeURI?: string;
  public commandProcessorSentDateTime?: string | Date;
  public commandReceivedDateTime?: string | Date;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyRequestMessage';
  }

  /**
   * Get property definitions for HaleyRequestMessage
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
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyResponseQueuePreferenceURI',
        tsPropertyName: 'haleyResponseQueuePreferenceURI',
        type: 'string',
        required: false,
        format: 'uri'
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
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatCommandModeURI',
        tsPropertyName: 'haleyChatCommandModeURI',
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
        propertyURI: 'http://vital.ai/ontology/haley#hasCommandChildReceivedDateTime',
        tsPropertyName: 'commandChildReceivedDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatModelTemperature',
        tsPropertyName: 'haleyChatModelTemperature',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatTestModeURI',
        tsPropertyName: 'haleyChatTestModeURI',
        type: 'string',
        required: false,
        format: 'uri'
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
      }
    ];
  }


}
